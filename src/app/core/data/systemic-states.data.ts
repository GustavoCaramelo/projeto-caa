import { ISystemicState } from '../models/systemic-state.model';

export const SYSTEMIC_STATES_DATA: readonly ISystemicState[] = [
  {
    id: 'state-fome',
    code: 'FOME',
    label: 'FOME',
    category: 'SYSTEMIC_STATE',
    visualCue: 'PRATO AMIGÁVEL E COLHER SUAVE',
    pastelBg: '#F7EFE6',
    pastelBorder: '#DEC9B5',
    pastelSelectedBg: '#EFE1D2',
    pastelSelectedBorder: '#BE9E81',
    ariaLabel: 'Sentindo Fome'
  },
  {
    id: 'state-sono',
    code: 'SONO',
    label: 'SONO',
    category: 'SYSTEMIC_STATE',
    visualCue: 'LUA CALMA E ESTRELINHA DOURADA PASTEL',
    pastelBg: '#ECEEF6',
    pastelBorder: '#C7CCE5',
    pastelSelectedBg: '#DFE2F2',
    pastelSelectedBorder: '#939DCC',
    ariaLabel: 'Sentindo Sono ou Cansaço'
  },
  {
    id: 'state-sede',
    code: 'SEDE',
    label: 'SEDE',
    category: 'SYSTEMIC_STATE',
    visualCue: 'COPO COM ÁGUA SUAVE E CANUDO AMIGÁVEL',
    pastelBg: '#EBF3F7',
    pastelBorder: '#C2D9E8',
    pastelSelectedBg: '#DEECF5',
    pastelSelectedBorder: '#8EB3CC',
    ariaLabel: 'Sentindo Sede / Quero Água'
  },
  {
    id: 'state-xixi',
    code: 'XIXI',
    label: 'XIXI',
    category: 'SYSTEMIC_STATE',
    visualCue: 'GOTINHA CARTOON AMIGÁVEL DE XIXI',
    pastelBg: '#FBF8E6',
    pastelBorder: '#E6E0BD',
    pastelSelectedBg: '#F3EFCF',
    pastelSelectedBorder: '#C7BD85',
    ariaLabel: 'Preciso Fazer Xixi / Banheiro'
  },
  {
    id: 'state-coco',
    code: 'COCO',
    label: 'COCÔ',
    category: 'SYSTEMIC_STATE',
    visualCue: 'PERSONAGEM DE COCÔ CARTOON SORRIDENTE',
    pastelBg: '#F6EFE8',
    pastelBorder: '#DECBB9',
    pastelSelectedBg: '#EBDDCE',
    pastelSelectedBorder: '#BFA287',
    ariaLabel: 'Preciso Fazer Cocô / Banheiro'
  },
  {
    id: 'state-dor',
    code: 'DOR',
    label: 'DOR',
    category: 'SYSTEMIC_STATE',
    visualCue: 'CURATIVO CARTOON AMIGÁVEL COM CORAÇÃO',
    pastelBg: '#F9ECEC',
    pastelBorder: '#E6C4C4',
    pastelSelectedBg: '#F5D7D7',
    pastelSelectedBorder: '#C78E8E',
    ariaLabel: 'Sentindo Dor'
  },
  {
    id: 'state-alivio',
    code: 'ALIVIO',
    label: 'ALÍVIO',
    category: 'SYSTEMIC_STATE',
    visualCue: 'SOL SUAVE E BRISA TRANQUILA',
    pastelBg: '#EDF6F0',
    pastelBorder: '#C5E2CD',
    pastelSelectedBg: '#DCF0E2',
    pastelSelectedBorder: '#84B891',
    ariaLabel: 'Sentindo Alívio / Mais Calmo'
  },
  {
    id: 'state-agitacao',
    code: 'AGITACAO',
    label: 'AGITAÇÃO',
    category: 'SYSTEMIC_STATE',
    visualCue: 'LINHAS ONDULADAS DE ENERGIA SUAVE',
    pastelBg: '#FAF1E6',
    pastelBorder: '#EBD4BC',
    pastelSelectedBg: '#F5E4CE',
    pastelSelectedBorder: '#C49E74',
    ariaLabel: 'Sentindo Agitação / Inquietude no Corpo'
  },
  {
    id: 'state-barulho',
    code: 'BARULHO',
    label: 'SENSIBILIDADE AO BARULHO',
    category: 'SYSTEMIC_STATE',
    visualCue: 'FONE ABAFADOR DE RUÍDO PROTETOR CARTOON',
    pastelBg: '#EFEBF6',
    pastelBorder: '#D2C7E5',
    pastelSelectedBg: '#E5DDF0',
    pastelSelectedBorder: '#A593C7',
    ariaLabel: 'Sensibilidade ao Barulho / Som Muito Alto'
  }
];
