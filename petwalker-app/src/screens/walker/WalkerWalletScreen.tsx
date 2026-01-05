import { Fragment } from 'react';
import { Card } from '../../components/Card';
import { ScreenContainer } from '../../components/Layout';
import { Button } from '../../components/Buttons';
import { Pill } from '../../components/Pill';
import { Body, Caption, Heading, Subheading } from '../../components/Typography';
import { usePrototypeData } from '../../context/PrototypeContext';

export function WalkerWalletScreen() {
  const {
    state: {
      walker: { earnings, feedback, rideStatus },
    },
    advanceWalkerRide,
  } = usePrototypeData();
  const formattedBalance = earnings.balance.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <ScreenContainer>
      <Heading>Carteira e reputação</Heading>
      <Body>Acompanhe seus ganhos e feedback dos tutores.</Body>

      <Card>
        <Subheading>Saldo disponível</Subheading>
        <Body style={{ fontSize: 28, fontWeight: '600' }}>R$ {formattedBalance}</Body>
        <Caption>Próximo payout: {earnings.nextPayout}</Caption>
        <Pill variant="success">+{earnings.growthPercentage}% vs semana anterior</Pill>
        <Caption>{earnings.weeklyCount} passeios concluídos nesta semana.</Caption>
        <Button>Solicitar saque</Button>
        <Button variant="ghost" onPress={advanceWalkerRide}>
          Marcar passeio como concluído
        </Button>
      </Card>

      <Card>
        <Subheading>Feedback recente</Subheading>
        {feedback.map((item) => (
          <Fragment key={`${item.name}-${item.comment}`}>
            <Body>{item.name} • {'⭐️'.repeat(item.rating)}</Body>
            <Caption>"{item.comment}"</Caption>
          </Fragment>
        ))}
        <Button variant="secondary">Ver dicas para aumentar rating</Button>
        <Caption>{rideStatus === 'finalizado' ? 'Envie o check-out para liberar novo feedback.' : 'Finalize o passeio atual para receber novas avaliações.'}</Caption>
      </Card>
    </ScreenContainer>
  );
}
