import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("users_id_idx", ["id"], {})
@Index("users_pk", ["username"], { unique: true })
@Entity("users", { schema: "public" })
export class Users {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("timestamp without time zone", {
    name: "created",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  created: Date | null;

  @Column("timestamp without time zone", { name: "deleted", nullable: true })
  deleted: Date | null;

  @Column("timestamp without time zone", {
    name: "updated",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  updated: Date | null;

  @Column("character varying", { primary: true, name: "username", length: 80 })
  username: string;

  @Column("character varying", { name: "password", nullable: true, length: 80 })
  password: string | null;

  @Column("json", { name: "json_data", nullable: true })
  jsonData: object | null;
}
