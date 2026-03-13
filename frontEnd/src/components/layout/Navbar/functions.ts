import type { Lista } from '../../../types/Lista';

export function useNavbarLogic(listaSelecionada: Lista | null) {
  function isSelected(lista: Lista) {
    return listaSelecionada?.id === lista.id;
  }

  return {
    isSelected
  };
}