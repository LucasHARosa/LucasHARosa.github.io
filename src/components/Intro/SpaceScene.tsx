"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

interface SpaceSceneProps {
  mousePosition: { x: number; y: number };
}

export function SpaceScene({ mousePosition }: SpaceSceneProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const astronautRef = useRef<THREE.Group | null>(null);
  const frameIdRef = useRef<number | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 5;
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
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0x4e5ba6, 1);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    scene.add(directionalLight);

    const blueLight = new THREE.PointLight(0x3b82f6, 1, 10);
    blueLight.position.set(2, 1, 2);
    scene.add(blueLight);

    const purpleLight = new THREE.PointLight(0xa78bfa, 1, 10);
    purpleLight.position.set(-2, -1, 2);
    scene.add(purpleLight);

    const spotlight = new THREE.SpotLight(0xffffff, 1);
    spotlight.position.set(0, 5, 5);
    spotlight.angle = Math.PI / 6;
    spotlight.penumbra = 0.3;
    spotlight.decay = 2;
    spotlight.distance = 20;
    spotlight.castShadow = true;
    scene.add(spotlight);

    // Create custom astronaut
    const astronautGroup = new THREE.Group();

    // Body - main sphere with metallic material
    const bodyGeometry = new THREE.SphereGeometry(0.8, 32, 32);
    const bodyMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.3,
      roughness: 0.4,
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.castShadow = true;
    body.receiveShadow = true;
    astronautGroup.add(body);

    // Helmet visor with better transparency and reflections
    const visorGeometry = new THREE.SphereGeometry(0.55, 32, 32);
    const visorMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xa78bfa,
      transparent: true,
      opacity: 0.75,
      metalness: 0.8,
      roughness: 0.1,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      emissive: new THREE.Color(0x1e3a8a),
      emissiveIntensity: 0.2,
    });
    const visor = new THREE.Mesh(visorGeometry, visorMaterial);
    visor.position.set(0, 0.1, 0.4);
    visor.castShadow = true;
    astronautGroup.add(visor);

    // Backpack with more details
    const backpackGeometry = new THREE.BoxGeometry(0.8, 0.8, 0.4);
    const backpackMaterial = new THREE.MeshStandardMaterial({
      color: 0xdddddd,
      metalness: 0.5,
      roughness: 0.5,
    });
    const backpack = new THREE.Mesh(backpackGeometry, backpackMaterial);
    backpack.position.set(0, 0, -0.6);
    backpack.castShadow = true;
    astronautGroup.add(backpack);

    // Backpack details - tubes and connectors
    const tubeGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.5, 16);
    const tubeMaterial = new THREE.MeshStandardMaterial({
      color: 0x888888,
      metalness: 0.7,
      roughness: 0.3,
    });

    const tube1 = new THREE.Mesh(tubeGeometry, tubeMaterial);
    tube1.position.set(0.25, 0.2, -0.6);
    tube1.castShadow = true;
    astronautGroup.add(tube1);

    const tube2 = new THREE.Mesh(tubeGeometry, tubeMaterial);
    tube2.position.set(-0.25, 0.2, -0.6);
    tube2.castShadow = true;
    astronautGroup.add(tube2);

    const particlesGroup = new THREE.Group();
    const particleMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0xa78bfa,
    });

    for (let i = 0; i < 15; i++) {
      const particleGeometry = new THREE.SphereGeometry(0.02, 2, 2);
      const particle = new THREE.Mesh(particleGeometry, particleMaterial);

      const angle = (i / 15) * Math.PI * 2;
      const radius = 1.4 + Math.random() * 0.3;
      const y = -2 + Math.random() * 1.2;

      particle.userData = {
        angle,
        radius,
        speed: 0.001 + Math.random() * 0.0015,
        y,
      };

      particle.position.set(
        Math.cos(angle) * radius,
        y,
        Math.sin(angle) * radius
      );
      particlesGroup.add(particle);
    }

    scene.add(particlesGroup);
    // Arms with better joints
    const createArm = (x: number) => {
      const armGroup = new THREE.Group();

      // Upper arm
      const upperArmGeometry = new THREE.CylinderGeometry(0.15, 0.15, 0.6, 32);
      const armMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        metalness: 0.3,
        roughness: 0.4,
      });
      const upperArm = new THREE.Mesh(upperArmGeometry, armMaterial);
      upperArm.position.y = -0.3;
      upperArm.castShadow = true;
      armGroup.add(upperArm);

      // Shoulder joint
      const shoulderGeometry = new THREE.SphereGeometry(0.18, 32, 32);
      const shoulder = new THREE.Mesh(shoulderGeometry, armMaterial);
      shoulder.castShadow = true;
      armGroup.add(shoulder);

      // Glove
      const gloveGeometry = new THREE.SphereGeometry(0.18, 32, 32);
      const gloveMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        metalness: 0.4,
        roughness: 0.3,
      });
      const glove = new THREE.Mesh(gloveGeometry, gloveMaterial);
      glove.position.y = -0.6;
      glove.scale.set(1, 0.8, 1);
      glove.castShadow = true;
      armGroup.add(glove);

      armGroup.position.set(x, 0, 0);
      armGroup.rotation.z = Math.PI / 2;

      return armGroup;
    };

    // Left and right arms
    const leftArm = createArm(-0);
    astronautGroup.add(leftArm);

    const rightArm = createArm(0);
    astronautGroup.add(rightArm);

    // Legs with better joints
    const createLeg = (x: number) => {
      const legGroup = new THREE.Group();

      // Upper leg
      const upperLegGeometry = new THREE.CylinderGeometry(0.15, 0.15, 0.6, 32);
      const legMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        metalness: 0.3,
        roughness: 0.4,
      });
      const upperLeg = new THREE.Mesh(upperLegGeometry, legMaterial);
      upperLeg.position.y = -0.3;
      upperLeg.castShadow = true;
      legGroup.add(upperLeg);

      // Hip joint
      const hipGeometry = new THREE.SphereGeometry(0.18, 32, 32);
      const hip = new THREE.Mesh(hipGeometry, legMaterial);
      hip.castShadow = true;
      legGroup.add(hip);

      // Boot
      const bootGeometry = new THREE.CylinderGeometry(0.18, 0.22, 0.3, 32);
      const bootMaterial = new THREE.MeshStandardMaterial({
        color: 0xdddddd,
        metalness: 0.5,
        roughness: 0.3,
      });
      const boot = new THREE.Mesh(bootGeometry, bootMaterial);
      boot.position.y = -0.7;
      boot.castShadow = true;
      legGroup.add(boot);

      legGroup.position.set(x, -0.6, 0);

      return legGroup;
    };

    // Left and right legs
    const leftLeg = createLeg(-0.3);
    astronautGroup.add(leftLeg);

    const rightLeg = createLeg(0.3);
    astronautGroup.add(rightLeg);

    // Add details to the suit - badges and patches
    const badgeGeometry = new THREE.CircleGeometry(0.1, 32);
    const badgeMaterial = new THREE.MeshStandardMaterial({
      color: 0x3b82f6,
      metalness: 0.7,
      roughness: 0.2,
    });
    const badge = new THREE.Mesh(badgeGeometry, badgeMaterial);
    badge.position.set(0.4, 0.3, 0.75);
    badge.rotation.y = Math.PI;
    badge.castShadow = true;
    astronautGroup.add(badge);

    // Add oxygen tanks to backpack
    const tankGeometry = new THREE.CylinderGeometry(0.15, 0.15, 0.7, 32);
    const tankMaterial = new THREE.MeshStandardMaterial({
      color: 0xcccccc,
      metalness: 0.8,
      roughness: 0.2,
    });

    const leftTank = new THREE.Mesh(tankGeometry, tankMaterial);
    leftTank.position.set(-0.25, 0, -0.8);
    leftTank.castShadow = true;
    astronautGroup.add(leftTank);

    const rightTank = new THREE.Mesh(tankGeometry, tankMaterial);
    rightTank.position.set(0.25, 0, -0.8);
    rightTank.castShadow = true;
    astronautGroup.add(rightTank);

    // Scale and position the astronaut
    astronautGroup.scale.set(1.2, 1.2, 1.2);
    astronautGroup.position.set(0, 0, 0);
    scene.add(astronautGroup);
    astronautRef.current = astronautGroup;

    // Animation loop
    const animate = () => {
      frameIdRef.current = requestAnimationFrame(animate);

      if (astronautRef.current) {
        // Gentle floating animation
        astronautRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.3;

        // Subtle rotation
        astronautRef.current.rotation.y += 0.0017;
      }

      // Animate lights for a subtle glow effect
      blueLight.intensity = 1 + Math.sin(Date.now() * 0.002) * 0.2;
      purpleLight.intensity = 1 + Math.sin(Date.now() * 0.002 + Math.PI) * 0.2;

      controls.update();
      renderer.render(scene, camera);
      particlesGroup.children.forEach((particle) => {
        const { angle, radius, speed, y } = particle.userData;
        particle.userData.angle += speed;
        particle.position.x = Math.cos(particle.userData.angle) * radius;
        particle.position.z = Math.sin(particle.userData.angle) * radius;
        particle.position.y =
          y + Math.sin(Date.now() * 0.002 + particle.userData.angle * 2) * 0.05;
      });
    };

    animate();

    // Handle resize
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

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);

      if (frameIdRef.current !== null) {
        cancelAnimationFrame(frameIdRef.current);
      }

      if (mountRef.current && rendererRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement);
      }

      // Dispose astronaut geometries and materials
      if (astronautRef.current) {
        astronautRef.current.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.geometry.dispose();
            if (child.material instanceof THREE.Material) {
              child.material.dispose();
            } else if (Array.isArray(child.material)) {
              child.material.forEach((material) => material.dispose());
            }
          }
        });
      }
    };
  }, []);

  // Update astronaut rotation based on mouse position
  useEffect(() => {
    if (astronautRef.current) {
      // Smooth rotation based on mouse position
      const targetRotationX = mousePosition.y * 0.3;
      const targetRotationY = mousePosition.x * 1.5;

      // Apply rotation with smooth damping
      astronautRef.current.rotation.x +=
        (targetRotationX - astronautRef.current.rotation.x) * 0.1;
      astronautRef.current.rotation.y +=
        (targetRotationY - astronautRef.current.rotation.y) * 0.1;
    }
  }, [mousePosition]);

  return <div ref={mountRef} style={{ width: "100%", height: "100%" }} />;
}
