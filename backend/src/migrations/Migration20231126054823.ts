import { Migration } from '@mikro-orm/migrations';

export class Migration20231126054823 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "interests" ("uuid" varchar(255) not null, "name" varchar(255) not null, constraint "interests_pkey" primary key ("uuid"));');

    this.addSql('create table "files" ("uuid" varchar(255) not null, "key" varchar(255) not null, "url" varchar(255) not null, "type" varchar(255) not null, "name" varchar(255) not null, constraint "files_pkey" primary key ("uuid"));');

    this.addSql('create table "images" ("uuid" varchar(255) not null, "key" varchar(255) not null, "url" varchar(255) not null, "type" varchar(255) not null, "name" varchar(255) not null, "thumbnail" jsonb not null, constraint "images_pkey" primary key ("uuid"));');

    this.addSql('create table "partners" ("uuid" varchar(255) not null, "name" varchar(255) not null, "description" text not null, "logo_uuid" varchar(255) not null, constraint "partners_pkey" primary key ("uuid"));');

    this.addSql('create table "courses" ("uuid" varchar(255) not null, "name" varchar(255) not null, "partner_uuid" varchar(255) not null, "level" varchar(255) not null, constraint "courses_pkey" primary key ("uuid"));');

    this.addSql('create table "courses_interests" ("course_uuid" varchar(255) not null, "interest_uuid" varchar(255) not null, constraint "courses_interests_pkey" primary key ("course_uuid", "interest_uuid"));');

    this.addSql('create table "users" ("uuid" varchar(255) not null, "name" varchar(255) not null, "surname" varchar(255) not null, "patronymic" varchar(255) not null, "phone" varchar(255) not null, "password" varchar(255) not null, "role" varchar(255) not null, "score" int not null default 0, "avatar_uuid" varchar(255) null, "check_list" jsonb null, "interests" text[] null, constraint "users_pkey" primary key ("uuid"));');
    this.addSql('alter table "users" add constraint "users_phone_unique" unique ("phone");');

    this.addSql('create table "certificates" ("uuid" varchar(255) not null, "file_uuid" varchar(255) not null, "validated" boolean not null default false, "user_uuid" varchar(255) not null, "course_uuid" varchar(255) null, constraint "certificates_pkey" primary key ("uuid"));');

    this.addSql('create table "users_interests" ("user_uuid" varchar(255) not null, "substandard_two_uuid" varchar(255) not null, "grade" int not null, constraint "users_interests_pkey" primary key ("user_uuid", "substandard_two_uuid"));');

    this.addSql('alter table "partners" add constraint "partners_logo_uuid_foreign" foreign key ("logo_uuid") references "images" ("uuid") on update cascade;');

    this.addSql('alter table "courses" add constraint "courses_partner_uuid_foreign" foreign key ("partner_uuid") references "partners" ("uuid") on update cascade;');

    this.addSql('alter table "courses_interests" add constraint "courses_interests_course_uuid_foreign" foreign key ("course_uuid") references "courses" ("uuid") on update cascade on delete cascade;');
    this.addSql('alter table "courses_interests" add constraint "courses_interests_interest_uuid_foreign" foreign key ("interest_uuid") references "interests" ("uuid") on update cascade on delete cascade;');

    this.addSql('alter table "users" add constraint "users_avatar_uuid_foreign" foreign key ("avatar_uuid") references "images" ("uuid") on update cascade on delete set null;');

    this.addSql('alter table "certificates" add constraint "certificates_file_uuid_foreign" foreign key ("file_uuid") references "files" ("uuid") on update cascade;');
    this.addSql('alter table "certificates" add constraint "certificates_user_uuid_foreign" foreign key ("user_uuid") references "users" ("uuid") on update cascade;');
    this.addSql('alter table "certificates" add constraint "certificates_course_uuid_foreign" foreign key ("course_uuid") references "courses" ("uuid") on update cascade on delete set null;');

    this.addSql('alter table "users_interests" add constraint "users_interests_user_uuid_foreign" foreign key ("user_uuid") references "users" ("uuid") on update cascade;');
    this.addSql('alter table "users_interests" add constraint "users_interests_substandard_two_uuid_foreign" foreign key ("substandard_two_uuid") references "interests" ("uuid") on update cascade;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "courses_interests" drop constraint "courses_interests_interest_uuid_foreign";');

    this.addSql('alter table "users_interests" drop constraint "users_interests_substandard_two_uuid_foreign";');

    this.addSql('alter table "certificates" drop constraint "certificates_file_uuid_foreign";');

    this.addSql('alter table "partners" drop constraint "partners_logo_uuid_foreign";');

    this.addSql('alter table "users" drop constraint "users_avatar_uuid_foreign";');

    this.addSql('alter table "courses" drop constraint "courses_partner_uuid_foreign";');

    this.addSql('alter table "courses_interests" drop constraint "courses_interests_course_uuid_foreign";');

    this.addSql('alter table "certificates" drop constraint "certificates_course_uuid_foreign";');

    this.addSql('alter table "certificates" drop constraint "certificates_user_uuid_foreign";');

    this.addSql('alter table "users_interests" drop constraint "users_interests_user_uuid_foreign";');

    this.addSql('drop table if exists "interests" cascade;');

    this.addSql('drop table if exists "files" cascade;');

    this.addSql('drop table if exists "images" cascade;');

    this.addSql('drop table if exists "partners" cascade;');

    this.addSql('drop table if exists "courses" cascade;');

    this.addSql('drop table if exists "courses_interests" cascade;');

    this.addSql('drop table if exists "users" cascade;');

    this.addSql('drop table if exists "certificates" cascade;');

    this.addSql('drop table if exists "users_interests" cascade;');
  }

}
