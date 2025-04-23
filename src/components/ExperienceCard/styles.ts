import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme["Gray-800"]},
    ${({ theme }) => theme["Blue-300-opacity"]}
  );
  border: 1px solid ${({ theme }) => theme["Gray-800"]};
  transition: all 0.3s ease;
  border-radius: 0.75rem;
  margin-bottom: 2rem;

  &:hover {
    transform: translateY(-0.25rem);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: ${({ theme }) => theme["Blue-Gray-700"]};
  border-radius: 0.5rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const Title = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({ theme }) => theme["Gray-100"]};
`;

export const Subtitle = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme["Gray-400"]};
`;

export const Description = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme["Gray-300"]};
  line-height: 1.5;
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const Tag = styled.span`
  width: fit-content;
  font-size: 0.75rem;
  padding: 2px 10px;
  border-radius: 0.3rem;
  background-color: ${({ theme }) => theme["white"]};
  color: ${({ theme }) => theme["Gray-900"]};
  box-shadow: ${({ theme }) => theme["shadow-sm"]};
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 0.75rem;
    padding: 0.25rem 0.75rem;
    gap: 0.25rem;
  }
`;
