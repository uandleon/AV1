import { Aeronave } from "../models/Aeronave";
import { TipoAeronautico } from "../enums/TipoAeronautico";

export class AeronaveController {
  private aeronaves: Aeronave[] = [];
  private proximoId: number = 1;

  public cadastrar(modelo: string, fabricante: string, tipo: TipoAeronautico): Aeronave {
    const nova = new Aeronave(this.proximoId++, modelo, fabricante, tipo);
    this.aeronaves.push(nova);
    return nova;
  }

  public listar(): Aeronave[] {
    return this.aeronaves;
  }

  public buscarPorId(id: number): Aeronave | undefined {
    return this.aeronaves.find(a => a.id === id);
  }
}
