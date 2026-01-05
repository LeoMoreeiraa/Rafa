import { Card } from '../../components/Card';
import { ScreenContainer } from '../../components/Layout';
import { MapPlaceholder } from '../../components/MapPlaceholder';
import { Button } from '../../components/Buttons';
import { Pill } from '../../components/Pill';
import { PillRow } from '../../components/PillRow';
import { Body, Caption, Heading, Subheading } from '../../components/Typography';

export function AdminMonitorScreen() {
  return (
    <ScreenContainer>
      <Heading>Operações em tempo real</Heading>
      <Body>Acompanhe corridas ativas e intervenções críticas.</Body>

      <Card>
        <Subheading>Corridas ativas (32)</Subheading>
        <MapPlaceholder label="Heatmap de corridas" height={180} />
        <PillRow>
          <Pill variant="active">Região: Pinheiros</Pill>
          <Pill>Alertas: 2</Pill>
          <Pill>SLAs ok</Pill>
        </PillRow>
      </Card>

      <Card>
        <Subheading>Alertas críticos</Subheading>
        <Body>Passeio 45871 • Pausa longa • Tutor aguarda atualização</Body>
        <Pill variant="danger">10 min</Pill>
        <Body>Passeio 45852 • Suporte solicitado via app</Body>
        <Pill variant="warning">Em andamento</Pill>
        <Button>Contatar passeador</Button>
        <Button variant="secondary">Abrir ticket</Button>
      </Card>
    </ScreenContainer>
  );
}
