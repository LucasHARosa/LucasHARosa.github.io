import { Projetos } from '../Projetos';
import { Code, Cpu, DeviceMobile, Globe, HardDrives } from 'phosphor-react';
import { useState } from 'react';
import { listaProjetos } from '../../data/data';
import { Tag } from '../Tag';
import {
  ButtonSelect,
  ContainerButtonSelect,
  ContainerProjetos,
  ContainerTitle,
  SectionContainer,
  SelectContainer
} from './styles';

const categorias = [
  { label: "Principais", value: "principais", icon: <Globe size={22} /> },
  { label: "Mobile", value: "mobile", icon: <DeviceMobile size={22} /> },
  { label: "Frontend", value: "frontend", icon: <Code size={22} /> },
  { label: "Backend", value: "backend", icon: <HardDrives size={22} /> },
  { label: "IA", value: "ia", icon: <Cpu size={22} /> }
];

export function MainProjetos() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("mobile");

  const listaFiltrada = listaProjetos.filter((projeto) =>
    projeto.tipo.includes(categoriaAtiva)
  );

  return (
    <SectionContainer id="Projetos">
      <SelectContainer>
        <ContainerTitle>
          <Tag color="blue" background='blue'>📁 &nbsp; Portfólio</Tag>
          <h1>Trabalhos e projetos</h1>
        </ContainerTitle>

        <ContainerButtonSelect>
          {categorias.map(({ label, value, icon }) => (
            <ButtonSelect
              key={value}
              isActive={categoriaAtiva === value}
              onClick={() => setCategoriaAtiva(value)}
            >
              <div>{icon}</div>
              {label}
            </ButtonSelect>
          ))}
        </ContainerButtonSelect>
      </SelectContainer>

      <ContainerProjetos>
        {listaFiltrada.map((item) => (
          <Projetos
            key={item.id}
            projeto={item}
          />
        ))}
      </ContainerProjetos>
    </SectionContainer>
  );
}
