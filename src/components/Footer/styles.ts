import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme["Blue-Gray-900"]};
  color: ${({ theme }) => theme["Blue-Gray-100"]};
  padding: 2rem 1rem;
  border-top: 1px solid ${({ theme }) => theme["Blue-Gray-800"]};

  @media (min-width: 768px) {
    padding: 1rem;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const CompanyInfo = styled.div`
  margin-bottom: 1.5rem;
  text-align: center;

  @media (min-width: 768px) {
    margin-bottom: 0;
    text-align: left;
  }
`;

export const CompanyName = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

export const CompanyDescription = styled.p`
  color: ${({ theme }) => theme["Gray-400"]};
  max-width: 28rem;
  font-size: 0.875rem;
  line-height: 1.5;
`;

export const SocialSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    align-items: flex-end;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const SocialButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.375rem;
  color: ${({ theme }) => theme["Blue-Gray-300"]};
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #ffffff;
    background-color: ${({ theme }) => theme["Blue-Gray-800"]};
  }
`;

export const ContactEmail = styled.p`
  color: ${({ theme }) => theme["Blue-Gray-400"]};
  font-size: 0.875rem;
`;

export const BottomSection = styled.div`
  border-top: 1px solid ${({ theme }) => theme["Blue-Gray-800"]};
  padding-top: 1.5rem;
  padding-bottom: 0.5rem;
`;

export const Navigation = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem 1rem;
  margin-bottom: 1.5rem;
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme["Blue-Gray-300"]};
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #ffffff;
  }
`;

export const Copyright = styled.div`
  text-align: center;
  color: ${({ theme }) => theme["Blue-Gray-400"]};
  font-size: 0.875rem;
`;

export const MadeWith = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  margin-bottom: 0.25rem;
`;

export const HeartIcon = styled.span`
  color: #a78bfa;
  fill: #a78bfa;
`;
