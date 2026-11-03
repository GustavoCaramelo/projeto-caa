import { IEmotionItem } from '../models/emotion.model';

export const EMOTIONS_DATA: readonly IEmotionItem[] = [
  {
    id: 'emotion-alegria',
    code: 'ALEGRIA',
    label: 'ALEGRIA',
    category: 'EMOTION',
    visualCue: 'SORRISO GENTIL E OLHOS CALMOS',
    pastelBg: '#EDF6EE',
    pastelBorder: '#C6E2CA',
    pastelSelectedBg: '#E0F0E3',
    pastelSelectedBorder: '#84B88D',
    ariaLabel: 'Sentimento de Alegria'
  },
  {
    id: 'emotion-tristeza',
    code: 'TRISTEZA',
    label: 'TRISTEZA',
    category: 'EMOTION',
    visualCue: 'ROSTO SUAVE COM LÁGRIMA TRANQUILA',
    pastelBg: '#E9EFF6',
    pastelBorder: '#C5D7EA',
    pastelSelectedBg: '#DBE7F4',
    pastelSelectedBorder: '#8CAECF',
    ariaLabel: 'Sentimento de Tristeza'
  },
  {
    id: 'emotion-ansiedade',
    code: 'ANSIEDADE',
    label: 'ANSIEDADE',
    category: 'EMOTION',
    visualCue: 'PEQUENA NUVEM SUAVE NO PENSAMENTO',
    pastelBg: '#EBF2F7',
    pastelBorder: '#C6D8E5',
    pastelSelectedBg: '#DEECF5',
    pastelSelectedBorder: '#98BBD4',
    ariaLabel: 'Sentimento de Ansiedade'
  },
  {
    id: 'emotion-medo',
    code: 'MEDO',
    label: 'MEDO',
    category: 'EMOTION',
    visualCue: 'OLHINHOS ATENTOS E BRAÇOS RECOLHIDOS',
    pastelBg: '#EFEBF6',
    pastelBorder: '#D5CAE8',
    pastelSelectedBg: '#E5DDF0',
    pastelSelectedBorder: '#AD9ACA',
    ariaLabel: 'Sentimento de Medo'
  },
  {
    id: 'emotion-irritacao',
    code: 'IRRITAÇÃO',
    label: 'IRRITAÇÃO',
    category: 'EMOTION',
    visualCue: 'SOBRANCELHAS LEVEMENTE FRANZIDAS EM TOM PASTEL',
    pastelBg: '#FAF0E6',
    pastelBorder: '#EAD3C0',
    pastelSelectedBg: '#F5E4D3',
    pastelSelectedBorder: '#C8A589',
    ariaLabel: 'Sentimento de Irritação'
  },
  {
    id: 'emotion-raiva',
    code: 'RAIVA',
    label: 'RAIVA',
    category: 'EMOTION',
    visualCue: 'BOCHECHAS ROSADAS EM TOM CORAL SUAVE',
    pastelBg: '#F9E8E8',
    pastelBorder: '#E5BCBC',
    pastelSelectedBg: '#F5DADA',
    pastelSelectedBorder: '#C98B8B',
    ariaLabel: 'Sentimento de Raiva'
  }
];

