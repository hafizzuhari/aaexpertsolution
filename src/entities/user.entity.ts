import { Column, Entity } from "typeorm";
import { BaseEntitySchema } from ".";

@Entity()
export class User extends BaseEntitySchema {
  @Column({ type: "varchar" })
  username: string;
  @Column({ type: "varchar" })
  email: string;
  @Column({ type: "varchar" })
  password: string;
  @Column({ type: "varchar" })
  accessToken: string;
  @Column({ type: "varchar" })
  refreshToken: string;
}
