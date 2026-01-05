import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

type TutorRideStatus = 'aguardando' | 'buscando' | 'a-caminho' | 'passeando' | 'retornando' | 'concluido';

type WalkerRideStatus = 'livre' | 'aceitou' | 'em-andamento' | 'finalizado';

type AdminAlert = {
  id: string;
  description: string;
  severity: 'warning' | 'danger';
  minutes: number;
};

type Coordinate = {
  latitude: number;
  longitude: number;
};

type MarketplaceProduct = {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  image: string;
  stock: number;
  badge?: string;
  favorited: boolean;
};

type CommunityPost = {
  id: string;
  author: string;
  role: string;
  publishedAt: string;
  content: string;
  image?: string;
  likes: number;
  liked: boolean;
  saved: boolean;
  comments: number;
  highlights: string[];
};

type PrototypeState = {
  tutor: {
    nextRide: {
      status: TutorRideStatus;
      etaMinutes: number;
      price: number;
      distanceKm: number;
      photos: number;
    };
    healthCompletion: number;
    demandLevel: 'normal' | 'alta';
    map: {
      path: Coordinate[];
      currentIndex: number;
      currentPosition: Coordinate;
      destination: Coordinate;
    };
    marketplace: MarketplaceProduct[];
    communityFeed: CommunityPost[];
  };
  walker: {
    agenda: Array<{ name: string; time: string; status: 'confirmado' | 'atencao' }>;
    highlightedOpportunity: {
      name: string;
      etaMinutes: number;
      reward: number;
      distanceKm: number;
      requirements: string[];
      accepted: boolean;
    };
    rideStatus: WalkerRideStatus;
    earnings: {
      balance: number;
      weeklyCount: number;
      growthPercentage: number;
      nextPayout: string;
    };
    feedback: Array<{ name: string; rating: number; comment: string }>;
  };
  admin: {
    pendingApprovals: number;
    slaHours: number;
    alerts: AdminAlert[];
  };
};

type PrototypeContextValue = {
  state: PrototypeState;
  advanceTutorRide: () => void;
  toggleTutorDemand: () => void;
  toggleWalkerOpportunity: () => void;
  advanceWalkerRide: () => void;
  resolveAdminAlert: (id: string) => void;
  toggleProductFavorite: (id: string) => void;
  purchaseMarketplaceProduct: (id: string) => void;
  togglePostLike: (id: string) => void;
  togglePostSave: (id: string) => void;
  resetMockData: () => void;
};

const initialState: PrototypeState = {
  tutor: {
    nextRide: {
      status: 'buscando',
      etaMinutes: 12,
      price: 48,
      distanceKm: 0,
      photos: 0,
    },
    healthCompletion: 0.8,
    demandLevel: 'alta',
    map: {
      path: [
        { latitude: -23.5614, longitude: -46.6559 },
        { latitude: -23.5608, longitude: -46.6572 },
        { latitude: -23.5597, longitude: -46.6584 },
        { latitude: -23.5586, longitude: -46.6576 },
        { latitude: -23.5579, longitude: -46.6561 },
        { latitude: -23.5591, longitude: -46.6548 },
      ],
      currentIndex: 0,
      currentPosition: { latitude: -23.5614, longitude: -46.6559 },
      destination: { latitude: -23.5591, longitude: -46.6548 },
    },
    marketplace: [
      {
        id: 'kit-reforco',
        title: 'Kit passeio reforçado',
        subtitle: 'Coleira tática + guia anti puxão + kit chuva',
        price: 189.9,
        image: 'https://images.unsplash.com/photo-1525253086316-d0c936c814f8?auto=format&fit=crop&w=800&q=80',
        stock: 4,
        badge: 'Best seller',
        favorited: true,
      },
      {
        id: 'assinatura-premium',
        title: 'Assinatura Premium Care',
        subtitle: 'Passeador preferencial + relatório de saúde mensal',
        price: 249.0,
        image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=800&q=80',
        stock: 12,
        badge: 'Novo',
        favorited: false,
      },
      {
        id: 'snack-gourmet',
        title: 'Snacks gourmets 100% naturais',
        subtitle: 'Combo degustação para 1 semana com 5 sabores',
        price: 69.5,
        image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=800&q=80',
        stock: 7,
        favorited: false,
      },
    ],
    communityFeed: [
      {
        id: 'post1',
        author: 'Carla M.',
        role: 'Passeadora nível Gold',
        publishedAt: 'há 12 minutos',
        content: 'Passeio de hoje com o Thor no Parque do Ibirapuera. Dica: sempre levar água congelada para os mais agitados! 🐾',
        image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80',
        likes: 128,
        liked: true,
        saved: false,
        comments: 14,
        highlights: ['Trilhas urbanas', 'Cuidados no calor'],
      },
      {
        id: 'post2',
        author: 'Dr. Felipe Andrade',
        role: 'Vet parceiro PetWalker',
        publishedAt: 'há 2 horas',
        content: 'Checklist rápido pré-passeio: hidratação ok, plaquinha atualizada e repelente natural quando o passeio é em áreas verdes.',
        likes: 84,
        liked: false,
        saved: true,
        comments: 9,
        highlights: ['Checklist', 'Saúde preventiva'],
      },
      {
        id: 'post3',
        author: 'Comunidade PetWalker',
        role: 'Curadoria semanal',
        publishedAt: 'há 5 horas',
        content: 'Calendário de encontros off-line: sábado tem socialização para filhotes na Vila Mariana. Confirmou presença?',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
        likes: 42,
        liked: false,
        saved: false,
        comments: 18,
        highlights: ['Eventos', 'Socialização'],
      },
    ],
  },
  walker: {
    agenda: [
      { name: 'Thor', time: '14h', status: 'confirmado' },
      { name: 'Luna', time: '16h', status: 'atencao' },
    ],
    highlightedOpportunity: {
      name: 'Thor',
      etaMinutes: 9,
      reward: 38,
      distanceKm: 3,
      requirements: ['Parque preferido', 'Fotos obrigatórias'],
      accepted: false,
    },
    rideStatus: 'livre',
    earnings: {
      balance: 482.5,
      weeklyCount: 6,
      growthPercentage: 12,
      nextPayout: 'terça-feira',
    },
    feedback: [
      { name: 'Ana S.', rating: 5, comment: 'Thor voltou exausto e feliz!' },
      { name: 'Marcelo T.', rating: 4, comment: 'Ótima comunicação.' },
    ],
  },
  admin: {
    pendingApprovals: 14,
    slaHours: 6,
    alerts: [
      { id: '45871', description: 'Pausa longa • Tutor aguarda atualização', severity: 'danger', minutes: 10 },
      { id: '45852', description: 'Suporte solicitado via app', severity: 'warning', minutes: 4 },
    ],
  },
};

const PrototypeContext = createContext<PrototypeContextValue | undefined>(undefined);

export function PrototypeProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<PrototypeState>(initialState);

  const advanceTutorRide = () => {
    setState((prev) => {
      const sequence: TutorRideStatus[] = ['buscando', 'a-caminho', 'passeando', 'retornando', 'concluido'];
      const currentIndex = sequence.indexOf(prev.tutor.nextRide.status);
      const nextStatus = sequence[currentIndex + 1] ?? 'buscando';
      const shouldReset = prev.tutor.nextRide.status === 'concluido' && nextStatus === 'buscando';
      const path = prev.tutor.map.path;
      const currentPathIndex = shouldReset ? 0 : Math.min(prev.tutor.map.currentIndex + 1, path.length - 1);
      const nextPathIndex = shouldReset ? 0 : currentPathIndex;
      const nextPosition = path[nextPathIndex] ?? path[path.length - 1];
      const progressRatio = path.length > 1 ? nextPathIndex / (path.length - 1) : 0;
      const totalDistanceKm = 2.3;
      const nextDistance = Number((totalDistanceKm * progressRatio).toFixed(1));
      const nextEta =
        nextStatus === 'a-caminho' ? 8 : nextStatus === 'passeando' ? 12 : nextStatus === 'retornando' ? 4 : nextStatus === 'concluido' ? 0 : 12;
      const nextPhotos =
        nextStatus === 'passeando' || nextStatus === 'retornando'
          ? prev.tutor.nextRide.photos + 1
          : nextStatus === 'buscando'
            ? 0
            : prev.tutor.nextRide.photos;

      return {
        ...prev,
        tutor: {
          ...prev.tutor,
          nextRide: {
            ...prev.tutor.nextRide,
            status: nextStatus,
            etaMinutes: nextEta,
            photos: nextPhotos,
            distanceKm: nextDistance,
          },
          map: {
            ...prev.tutor.map,
            currentIndex: nextPathIndex,
            currentPosition: nextPosition,
          },
        },
      };
    });
  };

  const toggleTutorDemand = () => {
    setState((prev) => ({
      ...prev,
      tutor: {
        ...prev.tutor,
        demandLevel: prev.tutor.demandLevel === 'alta' ? 'normal' : 'alta',
        nextRide: {
          ...prev.tutor.nextRide,
          price: prev.tutor.demandLevel === 'alta' ? 42 : 48,
        },
      },
    }));
  };

  const toggleWalkerOpportunity = () => {
    setState((prev) => ({
      ...prev,
      walker: {
        ...prev.walker,
        highlightedOpportunity: {
          ...prev.walker.highlightedOpportunity,
          accepted: !prev.walker.highlightedOpportunity.accepted,
        },
        rideStatus: prev.walker.highlightedOpportunity.accepted ? 'livre' : 'aceitou',
      },
      const toggleProductFavorite = (id: string) => {
        setState((prev) => ({
          ...prev,
          tutor: {
            ...prev.tutor,
            marketplace: prev.tutor.marketplace.map((product) =>
              product.id === id ? { ...product, favorited: !product.favorited } : product,
            ),
          },
        }));
      };

      const purchaseMarketplaceProduct = (id: string) => {
        setState((prev) => ({
          ...prev,
          tutor: {
            ...prev.tutor,
            marketplace: prev.tutor.marketplace.map((product) => {
              if (product.id !== id) {
                return product;
              }

              const nextStock = Math.max(0, product.stock - 1);
              const statusBadge = nextStock === 0 ? 'Esgotado' : product.badge ?? 'Popular';

              return {
                ...product,
                stock: nextStock,
                badge: statusBadge,
                favorited: true,
              };
            }),
          },
        }));
      };

      const togglePostLike = (id: string) => {
        setState((prev) => ({
          ...prev,
          tutor: {
            ...prev.tutor,
            communityFeed: prev.tutor.communityFeed.map((post) =>
              post.id === id
                ? {
                    ...post,
                    liked: !post.liked,
                    likes: post.liked ? Math.max(0, post.likes - 1) : post.likes + 1,
                  }
                : post,
            ),
          },
        }));
      };

      const togglePostSave = (id: string) => {
        setState((prev) => ({
          ...prev,
          tutor: {
            ...prev.tutor,
            communityFeed: prev.tutor.communityFeed.map((post) =>
              post.id === id
                ? {
                    ...post,
                    saved: !post.saved,
                  }
                : post,
            ),
          },
        }));
      };

    }));
  };

  const advanceWalkerRide = () => {
    setState((prev) => {
      const sequence: WalkerRideStatus[] = ['livre', 'aceitou', 'em-andamento', 'finalizado'];
      const currentIndex = sequence.indexOf(prev.walker.rideStatus);
      const nextStatus = sequence[currentIndex + 1] ?? 'livre';
      const earnedAmount = prev.walker.rideStatus === 'em-andamento' && nextStatus === 'finalizado' ? prev.walker.highlightedOpportunity.reward : 0;

      return {
        ...prev,
        walker: {
          ...prev.walker,
          rideStatus: nextStatus,
          highlightedOpportunity: {
            ...prev.walker.highlightedOpportunity,
            accepted: nextStatus !== 'livre' ? true : false,
          },
          agenda:
            nextStatus === 'finalizado'
              ? prev.walker.agenda.map((item, index) => (index === 0 ? { ...item, status: 'confirmado' } : item))
              : prev.walker.agenda,
          earnings: {
            ...prev.walker.earnings,
            balance: prev.walker.earnings.balance + earnedAmount,
            weeklyCount: prev.walker.earnings.weeklyCount + (earnedAmount > 0 ? 1 : 0),
          },
          feedback:
            earnedAmount > 0
              ? [
                  { name: 'Novo tutor', rating: 5, comment: 'Passeio impecável, obrigada!' },
                  ...prev.walker.feedback.slice(0, 1),
                ]
              : prev.walker.feedback,
        },
      };
    });
  };

  const resolveAdminAlert = (id: string) => {
    setState((prev) => ({
      ...prev,
      admin: {
        ...prev.admin,
        alerts: prev.admin.alerts.filter((alert) => alert.id !== id),
        pendingApprovals: prev.admin.pendingApprovals > 0 ? prev.admin.pendingApprovals - 1 : 0,
      },
    }));
  };

  const resetMockData = () => setState(initialState);

  const value = useMemo(
    () => ({
      state,
      advanceTutorRide,
      toggleTutorDemand,
      toggleWalkerOpportunity,
      toggleProductFavorite,
      purchaseMarketplaceProduct,
      togglePostLike,
      togglePostSave,
      advanceWalkerRide,
      resolveAdminAlert,
      resetMockData,
    }),
    [state],
  );

  return <PrototypeContext.Provider value={value}>{children}</PrototypeContext.Provider>;
}

export function usePrototypeData() {
  const context = useContext(PrototypeContext);
  if (!context) {
    throw new Error('usePrototypeData deve ser usado dentro de PrototypeProvider');
  }

  return context;
}
