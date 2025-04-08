"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

interface SpaceSceneProps {
  mousePosition: { x: number; y: number };
}

export function SpaceScene({ mousePosition }: SpaceSceneProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const modelRef = useRef<THREE.Object3D | null>(null);
  const frameIdRef = useRef<number | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [modelError, setModelError] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(100, 1, 0.1, 1000);
    camera.position.z = 8;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    renderer.setClearColor(0x000000, 0); // Transparent background
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.autoRotate = false;
    controlsRef.current = controls;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    scene.add(directionalLight);

    const blueLight = new THREE.PointLight(0x3b82f6, 0.8, 10);
    blueLight.position.set(2, 1, 2);
    scene.add(blueLight);

    const purpleLight = new THREE.PointLight(0xa78bfa, 0.8, 10);
    purpleLight.position.set(-2, -1, 2);
    scene.add(purpleLight);

    // Create a temporary sphere while the model loads
    const tempGeometry = new THREE.SphereGeometry(1, 32, 32);
    const tempMaterial = new THREE.MeshStandardMaterial({
      color: 0x2563eb,
      metalness: 0.3,
      roughness: 0.4,
    });
    const tempSphere = new THREE.Mesh(tempGeometry, tempMaterial);
    scene.add(tempSphere);
    modelRef.current = tempSphere;

    // Load 3D model
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath(
      "https://www.gstatic.com/draco/versioned/decoders/1.5.6/"
    );

    const gltfLoader = new GLTFLoader();
    gltfLoader.setDRACOLoader(dracoLoader);

    // Use the direct URL to the model instead of a local path
    const modelUrl = "/computer.glb";

    console.log("Attempting to load model from:", modelUrl);

    gltfLoader.load(
      modelUrl,
      (gltf) => {
        console.log("Model loaded successfully!");
        scene.remove(tempSphere);

        const model = gltf.scene;
        model.traverse((node) => {
          if (node instanceof THREE.Mesh) {
            node.castShadow = true;
            node.receiveShadow = true;

            if (node.material) {
              if (node.material instanceof THREE.MeshStandardMaterial) {
                node.material.envMapIntensity = 1.5;
                node.material.needsUpdate = true;
              }
            }
          }
        });

        // Scale the model - Earth model might need specific scaling
        model.scale.set(0.8, 0.8, 0.8);

        // Add a subtle tilt like Earth's axis
        model.rotation.x = THREE.MathUtils.degToRad(23.5);

        const box = new THREE.Box3().setFromObject(model);
        const center = new THREE.Vector3();
        box.getCenter(center);
        model.position.sub(center);

        // Cria um grupo e adiciona o modelo dentro
        const modelGroup = new THREE.Group();
        modelGroup.add(model);

        // Aplica a rotação axial ao grupo
        scene.add(modelGroup);
        modelRef.current = modelGroup;

        model.position.set(0, 0, 0);
        modelRef.current = new THREE.Group();
        modelRef.current.add(model);
        scene.add(modelRef.current);
        modelRef.current = model;
        setModelLoaded(true);
      },
      (progress) => {
        // Loading progress
        const percentComplete = progress.total
          ? Math.round((progress.loaded / progress.total) * 100)
          : 0;
        console.log(`Loading model: ${percentComplete}%`);
      },
      (error) => {
        // Error loading model
        console.error("Error loading model:", error);
        setModelError(true);

        // Create a more detailed Earth-like sphere as fallback
        createEarthSphere();
      }
    );

    // Fallback Earth sphere if model fails to load
    const createEarthSphere = () => {
      // Remove the simple temp sphere
      scene.remove(tempSphere);

      // Create a more detailed Earth-like sphere
      const earthGeometry = new THREE.SphereGeometry(1, 64, 64);

      // Create a basic Earth-like material with blue and green

      // Add some noise to the material to simulate continents
      const vertexShader = `
        varying vec2 vUv;
        varying vec3 vNormal;
        
        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `;

      const fragmentShader = `
        varying vec2 vUv;
        varying vec3 vNormal;
        
        void main() {
          // Base ocean color
          vec3 oceanColor = vec3(0.0, 0.3, 0.7);
          
          // Land color
          vec3 landColor = vec3(0.1, 0.5, 0.1);
          
          // Simple noise based on position
          float noise = sin(vUv.x * 20.0) * sin(vUv.y * 20.0);
          noise = smoothstep(0.2, 0.3, noise);
          
          // Mix ocean and land based on noise
          vec3 color = mix(oceanColor, landColor, noise);
          
          // Add atmosphere at edges
          float atmosphere = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 2.0);
          color = mix(color, vec3(0.5, 0.7, 1.0), atmosphere * 0.5);
          
          gl_FragColor = vec4(color, 1.0);
        }
      `;

      const customMaterial = new THREE.ShaderMaterial({
        uniforms: {},
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
      });

      const earthSphere = new THREE.Mesh(earthGeometry, customMaterial);
      earthSphere.castShadow = true;
      earthSphere.receiveShadow = true;

      // Add clouds layer
      const cloudGeometry = new THREE.SphereGeometry(1.02, 32, 32);
      const cloudMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.3,
        roughness: 1,
      });
      const clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);

      // Group Earth and clouds
      const earthGroup = new THREE.Group();
      earthGroup.add(earthSphere);
      earthGroup.add(clouds);

      // Add tilt
      earthGroup.rotation.x = THREE.MathUtils.degToRad(23.5);

      scene.add(earthGroup);
      modelRef.current = earthGroup;
      setModelLoaded(true);
    };

    const animate = () => {
      frameIdRef.current = requestAnimationFrame(animate);

      if (modelRef.current) {
        modelRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.4;

        if (modelLoaded) {
          modelRef.current.rotation.y += 0.002;
        } else {
          tempSphere.rotation.y += 0.01;
        }
      }

      // Animate lights for a subtle glow effect
      blueLight.intensity = 0.8 + Math.sin(Date.now() * 0.002) * 0.2;
      purpleLight.intensity =
        0.8 + Math.sin(Date.now() * 0.002 + Math.PI) * 0.2;

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!mountRef.current || !cameraRef.current || !rendererRef.current)
        return;

      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;

      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);

      if (frameIdRef.current !== null) {
        cancelAnimationFrame(frameIdRef.current);
      }

      if (mountRef.current && rendererRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement);
      }

      // Dispose of geometries and materials
      if (tempGeometry) tempGeometry.dispose();
      if (tempMaterial) tempMaterial.dispose();

      // Dispose model geometries and materials
      if (modelRef.current) {
        modelRef.current.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            if (child.geometry) child.geometry.dispose();
            if (child.material instanceof THREE.Material) {
              child.material.dispose();
            } else if (Array.isArray(child.material)) {
              child.material.forEach((material) => material.dispose());
            }
          }
        });
      }

      dracoLoader.dispose();
    };
  }, []);

  useEffect(() => {
    if (modelRef.current && modelLoaded) {
      const targetRotationX =
        mousePosition.y * 0.2 + THREE.MathUtils.degToRad(23.5); // Base tilt + mouse influence
      const targetRotationZ = mousePosition.x * 0.2; // Slight tilt based on mouse X position

      // Apply rotation with smooth damping
      modelRef.current.rotation.x +=
        (targetRotationX - modelRef.current.rotation.x) * 0.05;
      modelRef.current.rotation.z +=
        (targetRotationZ - modelRef.current.rotation.z) * 0.05;

      // Note: We don't adjust Y rotation here as it's used for the continuous spin
    }
  }, [mousePosition, modelLoaded]);

  return (
    <div ref={mountRef} style={{ width: "100%", height: "100%" }}>
      {modelError && (
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            background: "rgba(0,0,0,0.7)",
            color: "white",
            padding: "5px",
            fontSize: "12px",
            borderRadius: "3px",
          }}
        >
          Usando globo alternativo. O modelo original não pôde ser carregado.
        </div>
      )}
    </div>
  );
}
