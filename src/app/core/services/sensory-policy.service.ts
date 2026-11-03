import { Injectable, signal } from '@angular/core';

/**
 * SensoryPolicyService
 * 
 * Responsabilidade Única (SRP):
 * Garante que a aplicação permaneça sensorialmente acolhedora,
 * mantendo política rígida de ZERO estímulos sonoros, zero TTS automático
 * e transições estritamente suaves para evitar sobrecarga em crianças autistas.
 */
@Injectable({
  providedIn: 'root'
})
export class SensoryPolicyService {
  // Política rígida: som desabilitado por design para hipersensibilidade
  readonly isAudioBlocked = signal<boolean>(true);

  // Transição estritamente suave (fade de opacidade)
  readonly reducedMotionMode = signal<boolean>(true);

  // Paleta suave ativa
  readonly isPastelStrict = signal<boolean>(true);

  constructor() {
    this.enforceSilentEnvironment();
  }

  /**
   * Garante que nenhuma API de fala ou áudio seja disparada acidentalmente.
   */
  private enforceSilentEnvironment(): void {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch {
        // Silêncio defensivo
      }
    }
  }

  /**
   * Método de auditoria de som: sempre bloqueia qualquer emissão sonora
   */
  attemptPlaySound(): boolean {
    // Retorna false e nunca emite som
    return false;
  }
}

