import { Card } from '../../components/Card';
import { ScreenContainer } from '../../components/Layout';
import { Button } from '../../components/Buttons';
import { Pill } from '../../components/Pill';
import { PillRow } from '../../components/PillRow';
import { Body, Caption, Heading, Subheading } from '../../components/Typography';

export function AdminLoginScreen() {
  return (
    <ScreenContainer>
      <Heading>Acesso administrativo</Heading>
      <Body>Use suas credenciais corporativas para entrar no painel seguro.</Body>

      <Card>
        <Subheading>Login</Subheading>
        <Body>E-mail corporativo</Body>
        <Caption>operacoes@petwalker.com</Caption>
        <Body>Senha</Body>
        <Caption>••••••••</Caption>
        <PillRow>
          <Pill variant="active">MFA habilitado</Pill>
          <Pill>Ambiente: Produção</Pill>
        </PillRow>
        <Button>Acessar painel</Button>
        <Button variant="secondary">Central de contingência</Button>
      </Card>
    </ScreenContainer>
  );
}
