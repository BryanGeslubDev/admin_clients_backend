import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Clients } from "../client.entity";

@Injectable()
export class ClientsService {
  constructor(
    @InjectModel(Clients)
    private ClientsModel: typeof Clients
  ) {}

  findAll() {
    return this.ClientsModel.findAll();
  }

  findOne(id: number) {
    return this.ClientsModel.findByPk(id);
  }

  // TODO cambiar any
  async create(body: any) {
    const newClient = await this.ClientsModel.create(body);
    return this.ClientsModel.findByPk(newClient.id);
  }

  async update(id: number) {
    const updateClient = await this.ClientsModel.findByPk(id);
    const { ...client } = updateClient;

    await updateClient.update(client);

    return this.ClientsModel.findByPk(id);
  }

  async delete(id: number) {
    await this.ClientsModel.destroy({
      where: {
        id,
      },
    });
    return true;
  }
}
