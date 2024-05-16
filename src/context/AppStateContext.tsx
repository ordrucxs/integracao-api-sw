// AppStateContext.tsx
import { createCustomContext, useCustomEffect, useCustomState, useCustomClient, ReactNode } from './createContextWrapper';

// Defina sua interface para o estado global
interface AppState {
  // Defina sua interface de estado aqui
}

// Crie um novo contexto usando o wrapper personalizado
const { Context: AppStateContext, useContextWrapper: useAppState } = createCustomContext<AppState>();

// Componente provedor do contexto
export const AppStateProvider = ({ children }: { children: ReactNode }) => {
  // Use useCustomState para definir o estado global
  const { state, setState } = useCustomState<AppState>({ /* seu estado inicial aqui */ });

  // Use useCustomClient para marcar o componente como cliente
  const isClient = useCustomClient();

  // Use useCustomEffect para executar efeitos apenas no lado do cliente, se necessário

  return (
    <AppStateContext.Provider value={{ state, setState }}>
      {children}
    </AppStateContext.Provider>
  );
};
