// Code generated by Prisma (prisma@1.32.2). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  link: (where?: LinkWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
  vote: (where?: VoteWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  link: (where: LinkWhereUniqueInput) => LinkNullablePromise;
  links: (args?: {
    where?: LinkWhereInput;
    orderBy?: LinkOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Link>;
  linksConnection: (args?: {
    where?: LinkWhereInput;
    orderBy?: LinkOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => LinkConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  vote: (where: VoteWhereUniqueInput) => VoteNullablePromise;
  votes: (args?: {
    where?: VoteWhereInput;
    orderBy?: VoteOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Vote>;
  votesConnection: (args?: {
    where?: VoteWhereInput;
    orderBy?: VoteOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => VoteConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createLink: (data: LinkCreateInput) => LinkPromise;
  updateLink: (args: {
    data: LinkUpdateInput;
    where: LinkWhereUniqueInput;
  }) => LinkPromise;
  updateManyLinks: (args: {
    data: LinkUpdateManyMutationInput;
    where?: LinkWhereInput;
  }) => BatchPayloadPromise;
  upsertLink: (args: {
    where: LinkWhereUniqueInput;
    create: LinkCreateInput;
    update: LinkUpdateInput;
  }) => LinkPromise;
  deleteLink: (where: LinkWhereUniqueInput) => LinkPromise;
  deleteManyLinks: (where?: LinkWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;
  createVote: (data: VoteCreateInput) => VotePromise;
  updateVote: (args: {
    data: VoteUpdateInput;
    where: VoteWhereUniqueInput;
  }) => VotePromise;
  upsertVote: (args: {
    where: VoteWhereUniqueInput;
    create: VoteCreateInput;
    update: VoteUpdateInput;
  }) => VotePromise;
  deleteVote: (where: VoteWhereUniqueInput) => VotePromise;
  deleteManyVotes: (where?: VoteWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  link: (
    where?: LinkSubscriptionWhereInput
  ) => LinkSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
  vote: (
    where?: VoteSubscriptionWhereInput
  ) => VoteSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type LinkOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "description_ASC"
  | "description_DESC"
  | "url_ASC"
  | "url_DESC";

export type VoteOrderByInput = "id_ASC" | "id_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "email_ASC"
  | "email_DESC"
  | "password_ASC"
  | "password_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface UserUpdateOneWithoutLinksInput {
  create?: Maybe<UserCreateWithoutLinksInput>;
  update?: Maybe<UserUpdateWithoutLinksDataInput>;
  upsert?: Maybe<UserUpsertWithoutLinksInput>;
  delete?: Maybe<Boolean>;
  disconnect?: Maybe<Boolean>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export type LinkWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface VoteUpdateWithWhereUniqueWithoutUserInput {
  where: VoteWhereUniqueInput;
  data: VoteUpdateWithoutUserDataInput;
}

export interface LinkWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  description?: Maybe<String>;
  description_not?: Maybe<String>;
  description_in?: Maybe<String[] | String>;
  description_not_in?: Maybe<String[] | String>;
  description_lt?: Maybe<String>;
  description_lte?: Maybe<String>;
  description_gt?: Maybe<String>;
  description_gte?: Maybe<String>;
  description_contains?: Maybe<String>;
  description_not_contains?: Maybe<String>;
  description_starts_with?: Maybe<String>;
  description_not_starts_with?: Maybe<String>;
  description_ends_with?: Maybe<String>;
  description_not_ends_with?: Maybe<String>;
  url?: Maybe<String>;
  url_not?: Maybe<String>;
  url_in?: Maybe<String[] | String>;
  url_not_in?: Maybe<String[] | String>;
  url_lt?: Maybe<String>;
  url_lte?: Maybe<String>;
  url_gt?: Maybe<String>;
  url_gte?: Maybe<String>;
  url_contains?: Maybe<String>;
  url_not_contains?: Maybe<String>;
  url_starts_with?: Maybe<String>;
  url_not_starts_with?: Maybe<String>;
  url_ends_with?: Maybe<String>;
  url_not_ends_with?: Maybe<String>;
  postedBy?: Maybe<UserWhereInput>;
  votes_every?: Maybe<VoteWhereInput>;
  votes_some?: Maybe<VoteWhereInput>;
  votes_none?: Maybe<VoteWhereInput>;
  AND?: Maybe<LinkWhereInput[] | LinkWhereInput>;
  OR?: Maybe<LinkWhereInput[] | LinkWhereInput>;
  NOT?: Maybe<LinkWhereInput[] | LinkWhereInput>;
}

export interface VoteUpdateWithoutUserDataInput {
  link?: Maybe<LinkUpdateOneRequiredWithoutVotesInput>;
}

export interface VoteWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  link?: Maybe<LinkWhereInput>;
  user?: Maybe<UserWhereInput>;
  AND?: Maybe<VoteWhereInput[] | VoteWhereInput>;
  OR?: Maybe<VoteWhereInput[] | VoteWhereInput>;
  NOT?: Maybe<VoteWhereInput[] | VoteWhereInput>;
}

export interface VoteCreateManyWithoutLinkInput {
  create?: Maybe<VoteCreateWithoutLinkInput[] | VoteCreateWithoutLinkInput>;
  connect?: Maybe<VoteWhereUniqueInput[] | VoteWhereUniqueInput>;
}

export interface LinkUpdateWithWhereUniqueWithoutPostedByInput {
  where: LinkWhereUniqueInput;
  data: LinkUpdateWithoutPostedByDataInput;
}

export interface VoteCreateWithoutLinkInput {
  id?: Maybe<ID_Input>;
  user: UserCreateOneWithoutVotesInput;
}

export interface LinkUpdateOneRequiredWithoutVotesInput {
  create?: Maybe<LinkCreateWithoutVotesInput>;
  update?: Maybe<LinkUpdateWithoutVotesDataInput>;
  upsert?: Maybe<LinkUpsertWithoutVotesInput>;
  connect?: Maybe<LinkWhereUniqueInput>;
}

export interface UserCreateOneWithoutVotesInput {
  create?: Maybe<UserCreateWithoutVotesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface UserCreateWithoutVotesInput {
  id?: Maybe<ID_Input>;
  name: String;
  email: String;
  password: String;
  links?: Maybe<LinkCreateManyWithoutPostedByInput>;
}

export interface VoteUpdateInput {
  link?: Maybe<LinkUpdateOneRequiredWithoutVotesInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutVotesInput>;
}

export interface LinkCreateManyWithoutPostedByInput {
  create?: Maybe<
    LinkCreateWithoutPostedByInput[] | LinkCreateWithoutPostedByInput
  >;
  connect?: Maybe<LinkWhereUniqueInput[] | LinkWhereUniqueInput>;
}

export interface UserUpdateManyMutationInput {
  name?: Maybe<String>;
  email?: Maybe<String>;
  password?: Maybe<String>;
}

export interface LinkCreateWithoutPostedByInput {
  id?: Maybe<ID_Input>;
  description: String;
  url: String;
  votes?: Maybe<VoteCreateManyWithoutLinkInput>;
}

export interface UserUpdateInput {
  name?: Maybe<String>;
  email?: Maybe<String>;
  password?: Maybe<String>;
  links?: Maybe<LinkUpdateManyWithoutPostedByInput>;
  votes?: Maybe<VoteUpdateManyWithoutUserInput>;
}

export interface LinkUpdateInput {
  description?: Maybe<String>;
  url?: Maybe<String>;
  postedBy?: Maybe<UserUpdateOneWithoutLinksInput>;
  votes?: Maybe<VoteUpdateManyWithoutLinkInput>;
}

export interface LinkUpdateManyMutationInput {
  description?: Maybe<String>;
  url?: Maybe<String>;
}

export interface LinkScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  description?: Maybe<String>;
  description_not?: Maybe<String>;
  description_in?: Maybe<String[] | String>;
  description_not_in?: Maybe<String[] | String>;
  description_lt?: Maybe<String>;
  description_lte?: Maybe<String>;
  description_gt?: Maybe<String>;
  description_gte?: Maybe<String>;
  description_contains?: Maybe<String>;
  description_not_contains?: Maybe<String>;
  description_starts_with?: Maybe<String>;
  description_not_starts_with?: Maybe<String>;
  description_ends_with?: Maybe<String>;
  description_not_ends_with?: Maybe<String>;
  url?: Maybe<String>;
  url_not?: Maybe<String>;
  url_in?: Maybe<String[] | String>;
  url_not_in?: Maybe<String[] | String>;
  url_lt?: Maybe<String>;
  url_lte?: Maybe<String>;
  url_gt?: Maybe<String>;
  url_gte?: Maybe<String>;
  url_contains?: Maybe<String>;
  url_not_contains?: Maybe<String>;
  url_starts_with?: Maybe<String>;
  url_not_starts_with?: Maybe<String>;
  url_ends_with?: Maybe<String>;
  url_not_ends_with?: Maybe<String>;
  AND?: Maybe<LinkScalarWhereInput[] | LinkScalarWhereInput>;
  OR?: Maybe<LinkScalarWhereInput[] | LinkScalarWhereInput>;
  NOT?: Maybe<LinkScalarWhereInput[] | LinkScalarWhereInput>;
}

export type VoteWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface UserUpdateWithoutLinksDataInput {
  name?: Maybe<String>;
  email?: Maybe<String>;
  password?: Maybe<String>;
  votes?: Maybe<VoteUpdateManyWithoutUserInput>;
}

export interface LinkUpdateManyDataInput {
  description?: Maybe<String>;
  url?: Maybe<String>;
}

export interface VoteUpdateManyWithoutUserInput {
  create?: Maybe<VoteCreateWithoutUserInput[] | VoteCreateWithoutUserInput>;
  delete?: Maybe<VoteWhereUniqueInput[] | VoteWhereUniqueInput>;
  connect?: Maybe<VoteWhereUniqueInput[] | VoteWhereUniqueInput>;
  set?: Maybe<VoteWhereUniqueInput[] | VoteWhereUniqueInput>;
  disconnect?: Maybe<VoteWhereUniqueInput[] | VoteWhereUniqueInput>;
  update?: Maybe<
    | VoteUpdateWithWhereUniqueWithoutUserInput[]
    | VoteUpdateWithWhereUniqueWithoutUserInput
  >;
  upsert?: Maybe<
    | VoteUpsertWithWhereUniqueWithoutUserInput[]
    | VoteUpsertWithWhereUniqueWithoutUserInput
  >;
  deleteMany?: Maybe<VoteScalarWhereInput[] | VoteScalarWhereInput>;
}

export interface UserCreateOneWithoutLinksInput {
  create?: Maybe<UserCreateWithoutLinksInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  email?: Maybe<String>;
  email_not?: Maybe<String>;
  email_in?: Maybe<String[] | String>;
  email_not_in?: Maybe<String[] | String>;
  email_lt?: Maybe<String>;
  email_lte?: Maybe<String>;
  email_gt?: Maybe<String>;
  email_gte?: Maybe<String>;
  email_contains?: Maybe<String>;
  email_not_contains?: Maybe<String>;
  email_starts_with?: Maybe<String>;
  email_not_starts_with?: Maybe<String>;
  email_ends_with?: Maybe<String>;
  email_not_ends_with?: Maybe<String>;
  password?: Maybe<String>;
  password_not?: Maybe<String>;
  password_in?: Maybe<String[] | String>;
  password_not_in?: Maybe<String[] | String>;
  password_lt?: Maybe<String>;
  password_lte?: Maybe<String>;
  password_gt?: Maybe<String>;
  password_gte?: Maybe<String>;
  password_contains?: Maybe<String>;
  password_not_contains?: Maybe<String>;
  password_starts_with?: Maybe<String>;
  password_not_starts_with?: Maybe<String>;
  password_ends_with?: Maybe<String>;
  password_not_ends_with?: Maybe<String>;
  links_every?: Maybe<LinkWhereInput>;
  links_some?: Maybe<LinkWhereInput>;
  links_none?: Maybe<LinkWhereInput>;
  votes_every?: Maybe<VoteWhereInput>;
  votes_some?: Maybe<VoteWhereInput>;
  votes_none?: Maybe<VoteWhereInput>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export interface VoteCreateManyWithoutUserInput {
  create?: Maybe<VoteCreateWithoutUserInput[] | VoteCreateWithoutUserInput>;
  connect?: Maybe<VoteWhereUniqueInput[] | VoteWhereUniqueInput>;
}

export interface LinkUpsertWithWhereUniqueWithoutPostedByInput {
  where: LinkWhereUniqueInput;
  update: LinkUpdateWithoutPostedByDataInput;
  create: LinkCreateWithoutPostedByInput;
}

export interface LinkCreateOneWithoutVotesInput {
  create?: Maybe<LinkCreateWithoutVotesInput>;
  connect?: Maybe<LinkWhereUniqueInput>;
}

export interface LinkUpdateWithoutPostedByDataInput {
  description?: Maybe<String>;
  url?: Maybe<String>;
  votes?: Maybe<VoteUpdateManyWithoutLinkInput>;
}

export interface VoteSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<VoteWhereInput>;
  AND?: Maybe<VoteSubscriptionWhereInput[] | VoteSubscriptionWhereInput>;
  OR?: Maybe<VoteSubscriptionWhereInput[] | VoteSubscriptionWhereInput>;
  NOT?: Maybe<VoteSubscriptionWhereInput[] | VoteSubscriptionWhereInput>;
}

export interface LinkUpdateWithoutVotesDataInput {
  description?: Maybe<String>;
  url?: Maybe<String>;
  postedBy?: Maybe<UserUpdateOneWithoutLinksInput>;
}

export interface VoteCreateInput {
  id?: Maybe<ID_Input>;
  link: LinkCreateOneWithoutVotesInput;
  user: UserCreateOneWithoutVotesInput;
}

export interface LinkUpsertWithoutVotesInput {
  update: LinkUpdateWithoutVotesDataInput;
  create: LinkCreateWithoutVotesInput;
}

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  email: String;
  password: String;
  links?: Maybe<LinkCreateManyWithoutPostedByInput>;
  votes?: Maybe<VoteCreateManyWithoutUserInput>;
}

export interface VoteUpsertWithWhereUniqueWithoutUserInput {
  where: VoteWhereUniqueInput;
  update: VoteUpdateWithoutUserDataInput;
  create: VoteCreateWithoutUserInput;
}

export interface UserUpsertWithoutVotesInput {
  update: UserUpdateWithoutVotesDataInput;
  create: UserCreateWithoutVotesInput;
}

export interface VoteScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  AND?: Maybe<VoteScalarWhereInput[] | VoteScalarWhereInput>;
  OR?: Maybe<VoteScalarWhereInput[] | VoteScalarWhereInput>;
  NOT?: Maybe<VoteScalarWhereInput[] | VoteScalarWhereInput>;
}

export interface LinkCreateInput {
  id?: Maybe<ID_Input>;
  description: String;
  url: String;
  postedBy?: Maybe<UserCreateOneWithoutLinksInput>;
  votes?: Maybe<VoteCreateManyWithoutLinkInput>;
}

export interface UserUpsertWithoutLinksInput {
  update: UserUpdateWithoutLinksDataInput;
  create: UserCreateWithoutLinksInput;
}

export interface VoteCreateWithoutUserInput {
  id?: Maybe<ID_Input>;
  link: LinkCreateOneWithoutVotesInput;
}

export interface VoteUpdateManyWithoutLinkInput {
  create?: Maybe<VoteCreateWithoutLinkInput[] | VoteCreateWithoutLinkInput>;
  delete?: Maybe<VoteWhereUniqueInput[] | VoteWhereUniqueInput>;
  connect?: Maybe<VoteWhereUniqueInput[] | VoteWhereUniqueInput>;
  set?: Maybe<VoteWhereUniqueInput[] | VoteWhereUniqueInput>;
  disconnect?: Maybe<VoteWhereUniqueInput[] | VoteWhereUniqueInput>;
  update?: Maybe<
    | VoteUpdateWithWhereUniqueWithoutLinkInput[]
    | VoteUpdateWithWhereUniqueWithoutLinkInput
  >;
  upsert?: Maybe<
    | VoteUpsertWithWhereUniqueWithoutLinkInput[]
    | VoteUpsertWithWhereUniqueWithoutLinkInput
  >;
  deleteMany?: Maybe<VoteScalarWhereInput[] | VoteScalarWhereInput>;
}

export interface LinkSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<LinkWhereInput>;
  AND?: Maybe<LinkSubscriptionWhereInput[] | LinkSubscriptionWhereInput>;
  OR?: Maybe<LinkSubscriptionWhereInput[] | LinkSubscriptionWhereInput>;
  NOT?: Maybe<LinkSubscriptionWhereInput[] | LinkSubscriptionWhereInput>;
}

export interface VoteUpdateWithWhereUniqueWithoutLinkInput {
  where: VoteWhereUniqueInput;
  data: VoteUpdateWithoutLinkDataInput;
}

export interface VoteUpsertWithWhereUniqueWithoutLinkInput {
  where: VoteWhereUniqueInput;
  update: VoteUpdateWithoutLinkDataInput;
  create: VoteCreateWithoutLinkInput;
}

export interface LinkUpdateManyWithoutPostedByInput {
  create?: Maybe<
    LinkCreateWithoutPostedByInput[] | LinkCreateWithoutPostedByInput
  >;
  delete?: Maybe<LinkWhereUniqueInput[] | LinkWhereUniqueInput>;
  connect?: Maybe<LinkWhereUniqueInput[] | LinkWhereUniqueInput>;
  set?: Maybe<LinkWhereUniqueInput[] | LinkWhereUniqueInput>;
  disconnect?: Maybe<LinkWhereUniqueInput[] | LinkWhereUniqueInput>;
  update?: Maybe<
    | LinkUpdateWithWhereUniqueWithoutPostedByInput[]
    | LinkUpdateWithWhereUniqueWithoutPostedByInput
  >;
  upsert?: Maybe<
    | LinkUpsertWithWhereUniqueWithoutPostedByInput[]
    | LinkUpsertWithWhereUniqueWithoutPostedByInput
  >;
  deleteMany?: Maybe<LinkScalarWhereInput[] | LinkScalarWhereInput>;
  updateMany?: Maybe<
    LinkUpdateManyWithWhereNestedInput[] | LinkUpdateManyWithWhereNestedInput
  >;
}

export interface UserUpdateWithoutVotesDataInput {
  name?: Maybe<String>;
  email?: Maybe<String>;
  password?: Maybe<String>;
  links?: Maybe<LinkUpdateManyWithoutPostedByInput>;
}

export interface UserUpdateOneRequiredWithoutVotesInput {
  create?: Maybe<UserCreateWithoutVotesInput>;
  update?: Maybe<UserUpdateWithoutVotesDataInput>;
  upsert?: Maybe<UserUpsertWithoutVotesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface VoteUpdateWithoutLinkDataInput {
  user?: Maybe<UserUpdateOneRequiredWithoutVotesInput>;
}

export interface LinkUpdateManyWithWhereNestedInput {
  where: LinkScalarWhereInput;
  data: LinkUpdateManyDataInput;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  email?: Maybe<String>;
}>;

export interface LinkCreateWithoutVotesInput {
  id?: Maybe<ID_Input>;
  description: String;
  url: String;
  postedBy?: Maybe<UserCreateOneWithoutLinksInput>;
}

export interface UserCreateWithoutLinksInput {
  id?: Maybe<ID_Input>;
  name: String;
  email: String;
  password: String;
  votes?: Maybe<VoteCreateManyWithoutUserInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface VotePreviousValues {
  id: ID_Output;
}

export interface VotePreviousValuesPromise
  extends Promise<VotePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
}

export interface VotePreviousValuesSubscription
  extends Promise<AsyncIterator<VotePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface LinkConnection {
  pageInfo: PageInfo;
  edges: LinkEdge[];
}

export interface LinkConnectionPromise
  extends Promise<LinkConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<LinkEdge>>() => T;
  aggregate: <T = AggregateLinkPromise>() => T;
}

export interface LinkConnectionSubscription
  extends Promise<AsyncIterator<LinkConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<LinkEdgeSubscription>>>() => T;
  aggregate: <T = AggregateLinkSubscription>() => T;
}

export interface UserPreviousValues {
  id: ID_Output;
  name: String;
  email: String;
  password: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
}

export interface AggregateLink {
  count: Int;
}

export interface AggregateLinkPromise
  extends Promise<AggregateLink>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateLinkSubscription
  extends Promise<AsyncIterator<AggregateLink>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface User {
  id: ID_Output;
  name: String;
  email: String;
  password: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  links: <T = FragmentableArray<Link>>(args?: {
    where?: LinkWhereInput;
    orderBy?: LinkOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  votes: <T = FragmentableArray<Vote>>(args?: {
    where?: VoteWhereInput;
    orderBy?: VoteOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  links: <T = Promise<AsyncIterator<LinkSubscription>>>(args?: {
    where?: LinkWhereInput;
    orderBy?: LinkOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  votes: <T = Promise<AsyncIterator<VoteSubscription>>>(args?: {
    where?: VoteWhereInput;
    orderBy?: VoteOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  links: <T = FragmentableArray<Link>>(args?: {
    where?: LinkWhereInput;
    orderBy?: LinkOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  votes: <T = FragmentableArray<Vote>>(args?: {
    where?: VoteWhereInput;
    orderBy?: VoteOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface AggregateVote {
  count: Int;
}

export interface AggregateVotePromise
  extends Promise<AggregateVote>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateVoteSubscription
  extends Promise<AsyncIterator<AggregateVote>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface LinkEdge {
  node: Link;
  cursor: String;
}

export interface LinkEdgePromise extends Promise<LinkEdge>, Fragmentable {
  node: <T = LinkPromise>() => T;
  cursor: () => Promise<String>;
}

export interface LinkEdgeSubscription
  extends Promise<AsyncIterator<LinkEdge>>,
    Fragmentable {
  node: <T = LinkSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface VoteConnection {
  pageInfo: PageInfo;
  edges: VoteEdge[];
}

export interface VoteConnectionPromise
  extends Promise<VoteConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<VoteEdge>>() => T;
  aggregate: <T = AggregateVotePromise>() => T;
}

export interface VoteConnectionSubscription
  extends Promise<AsyncIterator<VoteConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<VoteEdgeSubscription>>>() => T;
  aggregate: <T = AggregateVoteSubscription>() => T;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface Vote {
  id: ID_Output;
}

export interface VotePromise extends Promise<Vote>, Fragmentable {
  id: () => Promise<ID_Output>;
  link: <T = LinkPromise>() => T;
  user: <T = UserPromise>() => T;
}

export interface VoteSubscription
  extends Promise<AsyncIterator<Vote>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  link: <T = LinkSubscription>() => T;
  user: <T = UserSubscription>() => T;
}

export interface VoteNullablePromise
  extends Promise<Vote | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  link: <T = LinkPromise>() => T;
  user: <T = UserPromise>() => T;
}

export interface LinkPreviousValues {
  id: ID_Output;
  createdAt: DateTimeOutput;
  description: String;
  url: String;
}

export interface LinkPreviousValuesPromise
  extends Promise<LinkPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  description: () => Promise<String>;
  url: () => Promise<String>;
}

export interface LinkPreviousValuesSubscription
  extends Promise<AsyncIterator<LinkPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  description: () => Promise<AsyncIterator<String>>;
  url: () => Promise<AsyncIterator<String>>;
}

export interface LinkSubscriptionPayload {
  mutation: MutationType;
  node: Link;
  updatedFields: String[];
  previousValues: LinkPreviousValues;
}

export interface LinkSubscriptionPayloadPromise
  extends Promise<LinkSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = LinkPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = LinkPreviousValuesPromise>() => T;
}

export interface LinkSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<LinkSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = LinkSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = LinkPreviousValuesSubscription>() => T;
}

export interface Link {
  id: ID_Output;
  createdAt: DateTimeOutput;
  description: String;
  url: String;
}

export interface LinkPromise extends Promise<Link>, Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  description: () => Promise<String>;
  url: () => Promise<String>;
  postedBy: <T = UserPromise>() => T;
  votes: <T = FragmentableArray<Vote>>(args?: {
    where?: VoteWhereInput;
    orderBy?: VoteOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface LinkSubscription
  extends Promise<AsyncIterator<Link>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  description: () => Promise<AsyncIterator<String>>;
  url: () => Promise<AsyncIterator<String>>;
  postedBy: <T = UserSubscription>() => T;
  votes: <T = Promise<AsyncIterator<VoteSubscription>>>(args?: {
    where?: VoteWhereInput;
    orderBy?: VoteOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface LinkNullablePromise
  extends Promise<Link | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  description: () => Promise<String>;
  url: () => Promise<String>;
  postedBy: <T = UserPromise>() => T;
  votes: <T = FragmentableArray<Vote>>(args?: {
    where?: VoteWhereInput;
    orderBy?: VoteOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface VoteSubscriptionPayload {
  mutation: MutationType;
  node: Vote;
  updatedFields: String[];
  previousValues: VotePreviousValues;
}

export interface VoteSubscriptionPayloadPromise
  extends Promise<VoteSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = VotePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = VotePreviousValuesPromise>() => T;
}

export interface VoteSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<VoteSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = VoteSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = VotePreviousValuesSubscription>() => T;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface VoteEdge {
  node: Vote;
  cursor: String;
}

export interface VoteEdgePromise extends Promise<VoteEdge>, Fragmentable {
  node: <T = VotePromise>() => T;
  cursor: () => Promise<String>;
}

export interface VoteEdgeSubscription
  extends Promise<AsyncIterator<VoteEdge>>,
    Fragmentable {
  node: <T = VoteSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

export type Long = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Link",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "Vote",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/crown-a144e9/demo-hackernews/dev`
});
export const prisma = new Prisma();
