import { Migration } from '@mikro-orm/migrations';

export class Migration20231125190142 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "users" add column "check_list" jsonb null;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "users" drop column "check_list";');
  }

}
