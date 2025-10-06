import readlineSync from "readline-sync";

export function perguntar(texto: string): string {
  return readlineSync.question(texto);
}
