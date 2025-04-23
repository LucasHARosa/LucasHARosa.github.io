import styled from "styled-components";

export const ExperienceSection = styled.section`
  padding: 0;
  overflow: hidden;
`;

export const ExperienceContainer = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  padding: 6rem 1rem 4rem;
`;

export const ExperienceTitle = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme["Gray-300"]};
  text-align: center;
  margin-bottom: 3rem;
`;

export const TimelineContainer = styled.div`
  position: relative;
  padding-left: 2rem;
  margin-top: 2rem;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 2px;
    background: linear-gradient(
      to bottom,
      ${({ theme }) => theme["Blue-500"]},
      ${({ theme }) => theme["Purple-500"]}
    );
  }
`;

export const LoadMoreButton = styled.div`
  max-width: 150px;
  margin: 2rem auto;
  display: block;
  cursor: pointer;
`;

export const ExperienceCardWrapper = styled.div<{ isVisible: boolean }>`
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: translateY(${({ isVisible }) => (isVisible ? "0" : "20px")});
  transition: opacity 0.5s ease, transform 0.5s ease;
  max-width: 800px;
  margin: 0 auto;
`;
