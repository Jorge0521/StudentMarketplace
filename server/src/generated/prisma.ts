import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    items: <T = Item[]>(args: { where?: ItemWhereInput, orderBy?: ItemOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    locations: <T = Location[]>(args: { where?: LocationWhereInput, orderBy?: LocationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    photos: <T = Photo[]>(args: { where?: PhotoWhereInput, orderBy?: PhotoOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    item: <T = Item | null>(args: { where: ItemWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    location: <T = Location | null>(args: { where: LocationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    photo: <T = Photo | null>(args: { where: PhotoWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    itemsConnection: <T = ItemConnection>(args: { where?: ItemWhereInput, orderBy?: ItemOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    locationsConnection: <T = LocationConnection>(args: { where?: LocationWhereInput, orderBy?: LocationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    photosConnection: <T = PhotoConnection>(args: { where?: PhotoWhereInput, orderBy?: PhotoOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createItem: <T = Item>(args: { data: ItemCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createLocation: <T = Location>(args: { data: LocationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPhoto: <T = Photo>(args: { data: PhotoCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateItem: <T = Item | null>(args: { data: ItemUpdateInput, where: ItemWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateLocation: <T = Location | null>(args: { data: LocationUpdateInput, where: LocationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePhoto: <T = Photo | null>(args: { data: PhotoUpdateInput, where: PhotoWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteItem: <T = Item | null>(args: { where: ItemWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteLocation: <T = Location | null>(args: { where: LocationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePhoto: <T = Photo | null>(args: { where: PhotoWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertItem: <T = Item>(args: { where: ItemWhereUniqueInput, create: ItemCreateInput, update: ItemUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertLocation: <T = Location>(args: { where: LocationWhereUniqueInput, create: LocationCreateInput, update: LocationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPhoto: <T = Photo>(args: { where: PhotoWhereUniqueInput, create: PhotoCreateInput, update: PhotoUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateManyMutationInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyItems: <T = BatchPayload>(args: { data: ItemUpdateManyMutationInput, where?: ItemWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyLocations: <T = BatchPayload>(args: { data: LocationUpdateManyMutationInput, where?: LocationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPhotos: <T = BatchPayload>(args: { data: PhotoUpdateManyMutationInput, where?: PhotoWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyItems: <T = BatchPayload>(args: { where?: ItemWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLocations: <T = BatchPayload>(args: { where?: LocationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPhotos: <T = BatchPayload>(args: { where?: PhotoWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    item: <T = ItemSubscriptionPayload | null>(args: { where?: ItemSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    location: <T = LocationSubscriptionPayload | null>(args: { where?: LocationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    photo: <T = PhotoSubscriptionPayload | null>(args: { where?: PhotoSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  Item: (where?: ItemWhereInput) => Promise<boolean>
  Location: (where?: LocationWhereInput) => Promise<boolean>
  Photo: (where?: PhotoWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateItem {
  count: Int!
}

type AggregateLocation {
  count: Int!
}

type AggregatePhoto {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

enum Category {
  BOOKS
  CLOTHES
  HOUSEHOLD
  OTHER
}

scalar DateTime

type Item implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  category: Category
  price: Float
  location: Location
  photos(where: PhotoWhereInput, orderBy: PhotoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Photo!]
  listed: Boolean!
  user: User
}

"""A connection to a list of items."""
type ItemConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ItemEdge]!
  aggregate: AggregateItem!
}

input ItemCreateInput {
  category: Category
  price: Float
  listed: Boolean
  location: LocationCreateOneWithoutItemInput
  photos: PhotoCreateManyWithoutItemInput
  user: UserCreateOneWithoutItemsInput
}

input ItemCreateManyWithoutUserInput {
  create: [ItemCreateWithoutUserInput!]
  connect: [ItemWhereUniqueInput!]
}

input ItemCreateOneWithoutLocationInput {
  create: ItemCreateWithoutLocationInput
  connect: ItemWhereUniqueInput
}

input ItemCreateOneWithoutPhotosInput {
  create: ItemCreateWithoutPhotosInput
  connect: ItemWhereUniqueInput
}

input ItemCreateWithoutLocationInput {
  category: Category
  price: Float
  listed: Boolean
  photos: PhotoCreateManyWithoutItemInput
  user: UserCreateOneWithoutItemsInput
}

input ItemCreateWithoutPhotosInput {
  category: Category
  price: Float
  listed: Boolean
  location: LocationCreateOneWithoutItemInput
  user: UserCreateOneWithoutItemsInput
}

input ItemCreateWithoutUserInput {
  category: Category
  price: Float
  listed: Boolean
  location: LocationCreateOneWithoutItemInput
  photos: PhotoCreateManyWithoutItemInput
}

"""An edge in a connection."""
type ItemEdge {
  """The item at the end of the edge."""
  node: Item!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ItemOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  category_ASC
  category_DESC
  price_ASC
  price_DESC
  listed_ASC
  listed_DESC
}

type ItemPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  category: Category
  price: Float
  listed: Boolean!
}

input ItemScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [ItemScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [ItemScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ItemScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  category: Category

  """All values that are not equal to given value."""
  category_not: Category

  """All values that are contained in given list."""
  category_in: [Category!]

  """All values that are not contained in given list."""
  category_not_in: [Category!]
  price: Float

  """All values that are not equal to given value."""
  price_not: Float

  """All values that are contained in given list."""
  price_in: [Float!]

  """All values that are not contained in given list."""
  price_not_in: [Float!]

  """All values less than the given value."""
  price_lt: Float

  """All values less than or equal the given value."""
  price_lte: Float

  """All values greater than the given value."""
  price_gt: Float

  """All values greater than or equal the given value."""
  price_gte: Float
  listed: Boolean

  """All values that are not equal to given value."""
  listed_not: Boolean
}

type ItemSubscriptionPayload {
  mutation: MutationType!
  node: Item
  updatedFields: [String!]
  previousValues: ItemPreviousValues
}

input ItemSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ItemSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ItemSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ItemSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ItemWhereInput
}

input ItemUpdateInput {
  category: Category
  price: Float
  listed: Boolean
  location: LocationUpdateOneWithoutItemInput
  photos: PhotoUpdateManyWithoutItemInput
  user: UserUpdateOneWithoutItemsInput
}

input ItemUpdateManyDataInput {
  category: Category
  price: Float
  listed: Boolean
}

input ItemUpdateManyMutationInput {
  category: Category
  price: Float
  listed: Boolean
}

input ItemUpdateManyWithoutUserInput {
  create: [ItemCreateWithoutUserInput!]
  connect: [ItemWhereUniqueInput!]
  set: [ItemWhereUniqueInput!]
  disconnect: [ItemWhereUniqueInput!]
  delete: [ItemWhereUniqueInput!]
  update: [ItemUpdateWithWhereUniqueWithoutUserInput!]
  updateMany: [ItemUpdateManyWithWhereNestedInput!]
  deleteMany: [ItemScalarWhereInput!]
  upsert: [ItemUpsertWithWhereUniqueWithoutUserInput!]
}

input ItemUpdateManyWithWhereNestedInput {
  where: ItemScalarWhereInput!
  data: ItemUpdateManyDataInput!
}

input ItemUpdateOneWithoutLocationInput {
  create: ItemCreateWithoutLocationInput
  connect: ItemWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: ItemUpdateWithoutLocationDataInput
  upsert: ItemUpsertWithoutLocationInput
}

input ItemUpdateOneWithoutPhotosInput {
  create: ItemCreateWithoutPhotosInput
  connect: ItemWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: ItemUpdateWithoutPhotosDataInput
  upsert: ItemUpsertWithoutPhotosInput
}

input ItemUpdateWithoutLocationDataInput {
  category: Category
  price: Float
  listed: Boolean
  photos: PhotoUpdateManyWithoutItemInput
  user: UserUpdateOneWithoutItemsInput
}

input ItemUpdateWithoutPhotosDataInput {
  category: Category
  price: Float
  listed: Boolean
  location: LocationUpdateOneWithoutItemInput
  user: UserUpdateOneWithoutItemsInput
}

input ItemUpdateWithoutUserDataInput {
  category: Category
  price: Float
  listed: Boolean
  location: LocationUpdateOneWithoutItemInput
  photos: PhotoUpdateManyWithoutItemInput
}

input ItemUpdateWithWhereUniqueWithoutUserInput {
  where: ItemWhereUniqueInput!
  data: ItemUpdateWithoutUserDataInput!
}

input ItemUpsertWithoutLocationInput {
  update: ItemUpdateWithoutLocationDataInput!
  create: ItemCreateWithoutLocationInput!
}

input ItemUpsertWithoutPhotosInput {
  update: ItemUpdateWithoutPhotosDataInput!
  create: ItemCreateWithoutPhotosInput!
}

input ItemUpsertWithWhereUniqueWithoutUserInput {
  where: ItemWhereUniqueInput!
  update: ItemUpdateWithoutUserDataInput!
  create: ItemCreateWithoutUserInput!
}

input ItemWhereInput {
  """Logical AND on all given filters."""
  AND: [ItemWhereInput!]

  """Logical OR on all given filters."""
  OR: [ItemWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ItemWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  category: Category

  """All values that are not equal to given value."""
  category_not: Category

  """All values that are contained in given list."""
  category_in: [Category!]

  """All values that are not contained in given list."""
  category_not_in: [Category!]
  price: Float

  """All values that are not equal to given value."""
  price_not: Float

  """All values that are contained in given list."""
  price_in: [Float!]

  """All values that are not contained in given list."""
  price_not_in: [Float!]

  """All values less than the given value."""
  price_lt: Float

  """All values less than or equal the given value."""
  price_lte: Float

  """All values greater than the given value."""
  price_gt: Float

  """All values greater than or equal the given value."""
  price_gte: Float
  listed: Boolean

  """All values that are not equal to given value."""
  listed_not: Boolean
  location: LocationWhereInput
  photos_every: PhotoWhereInput
  photos_some: PhotoWhereInput
  photos_none: PhotoWhereInput
  user: UserWhereInput
}

input ItemWhereUniqueInput {
  id: ID
}

type Location implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  lat: Float
  long: Float
  street: String
  city: String
  state: State
  zip: Int
  item: Item
}

"""A connection to a list of items."""
type LocationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [LocationEdge]!
  aggregate: AggregateLocation!
}

input LocationCreateInput {
  lat: Float
  long: Float
  street: String
  city: String
  state: State
  zip: Int
  item: ItemCreateOneWithoutLocationInput
}

input LocationCreateOneWithoutItemInput {
  create: LocationCreateWithoutItemInput
  connect: LocationWhereUniqueInput
}

input LocationCreateWithoutItemInput {
  lat: Float
  long: Float
  street: String
  city: String
  state: State
  zip: Int
}

"""An edge in a connection."""
type LocationEdge {
  """The item at the end of the edge."""
  node: Location!

  """A cursor for use in pagination."""
  cursor: String!
}

enum LocationOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  lat_ASC
  lat_DESC
  long_ASC
  long_DESC
  street_ASC
  street_DESC
  city_ASC
  city_DESC
  state_ASC
  state_DESC
  zip_ASC
  zip_DESC
}

type LocationPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  lat: Float
  long: Float
  street: String
  city: String
  state: State
  zip: Int
}

type LocationSubscriptionPayload {
  mutation: MutationType!
  node: Location
  updatedFields: [String!]
  previousValues: LocationPreviousValues
}

input LocationSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [LocationSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [LocationSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LocationSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: LocationWhereInput
}

input LocationUpdateInput {
  lat: Float
  long: Float
  street: String
  city: String
  state: State
  zip: Int
  item: ItemUpdateOneWithoutLocationInput
}

input LocationUpdateManyMutationInput {
  lat: Float
  long: Float
  street: String
  city: String
  state: State
  zip: Int
}

input LocationUpdateOneWithoutItemInput {
  create: LocationCreateWithoutItemInput
  connect: LocationWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: LocationUpdateWithoutItemDataInput
  upsert: LocationUpsertWithoutItemInput
}

input LocationUpdateWithoutItemDataInput {
  lat: Float
  long: Float
  street: String
  city: String
  state: State
  zip: Int
}

input LocationUpsertWithoutItemInput {
  update: LocationUpdateWithoutItemDataInput!
  create: LocationCreateWithoutItemInput!
}

input LocationWhereInput {
  """Logical AND on all given filters."""
  AND: [LocationWhereInput!]

  """Logical OR on all given filters."""
  OR: [LocationWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LocationWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  lat: Float

  """All values that are not equal to given value."""
  lat_not: Float

  """All values that are contained in given list."""
  lat_in: [Float!]

  """All values that are not contained in given list."""
  lat_not_in: [Float!]

  """All values less than the given value."""
  lat_lt: Float

  """All values less than or equal the given value."""
  lat_lte: Float

  """All values greater than the given value."""
  lat_gt: Float

  """All values greater than or equal the given value."""
  lat_gte: Float
  long: Float

  """All values that are not equal to given value."""
  long_not: Float

  """All values that are contained in given list."""
  long_in: [Float!]

  """All values that are not contained in given list."""
  long_not_in: [Float!]

  """All values less than the given value."""
  long_lt: Float

  """All values less than or equal the given value."""
  long_lte: Float

  """All values greater than the given value."""
  long_gt: Float

  """All values greater than or equal the given value."""
  long_gte: Float
  street: String

  """All values that are not equal to given value."""
  street_not: String

  """All values that are contained in given list."""
  street_in: [String!]

  """All values that are not contained in given list."""
  street_not_in: [String!]

  """All values less than the given value."""
  street_lt: String

  """All values less than or equal the given value."""
  street_lte: String

  """All values greater than the given value."""
  street_gt: String

  """All values greater than or equal the given value."""
  street_gte: String

  """All values containing the given string."""
  street_contains: String

  """All values not containing the given string."""
  street_not_contains: String

  """All values starting with the given string."""
  street_starts_with: String

  """All values not starting with the given string."""
  street_not_starts_with: String

  """All values ending with the given string."""
  street_ends_with: String

  """All values not ending with the given string."""
  street_not_ends_with: String
  city: String

  """All values that are not equal to given value."""
  city_not: String

  """All values that are contained in given list."""
  city_in: [String!]

  """All values that are not contained in given list."""
  city_not_in: [String!]

  """All values less than the given value."""
  city_lt: String

  """All values less than or equal the given value."""
  city_lte: String

  """All values greater than the given value."""
  city_gt: String

  """All values greater than or equal the given value."""
  city_gte: String

  """All values containing the given string."""
  city_contains: String

  """All values not containing the given string."""
  city_not_contains: String

  """All values starting with the given string."""
  city_starts_with: String

  """All values not starting with the given string."""
  city_not_starts_with: String

  """All values ending with the given string."""
  city_ends_with: String

  """All values not ending with the given string."""
  city_not_ends_with: String
  state: State

  """All values that are not equal to given value."""
  state_not: State

  """All values that are contained in given list."""
  state_in: [State!]

  """All values that are not contained in given list."""
  state_not_in: [State!]
  zip: Int

  """All values that are not equal to given value."""
  zip_not: Int

  """All values that are contained in given list."""
  zip_in: [Int!]

  """All values that are not contained in given list."""
  zip_not_in: [Int!]

  """All values less than the given value."""
  zip_lt: Int

  """All values less than or equal the given value."""
  zip_lte: Int

  """All values greater than the given value."""
  zip_gt: Int

  """All values greater than or equal the given value."""
  zip_gte: Int
  item: ItemWhereInput
}

input LocationWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createUser(data: UserCreateInput!): User!
  createItem(data: ItemCreateInput!): Item!
  createLocation(data: LocationCreateInput!): Location!
  createPhoto(data: PhotoCreateInput!): Photo!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateItem(data: ItemUpdateInput!, where: ItemWhereUniqueInput!): Item
  updateLocation(data: LocationUpdateInput!, where: LocationWhereUniqueInput!): Location
  updatePhoto(data: PhotoUpdateInput!, where: PhotoWhereUniqueInput!): Photo
  deleteUser(where: UserWhereUniqueInput!): User
  deleteItem(where: ItemWhereUniqueInput!): Item
  deleteLocation(where: LocationWhereUniqueInput!): Location
  deletePhoto(where: PhotoWhereUniqueInput!): Photo
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertItem(where: ItemWhereUniqueInput!, create: ItemCreateInput!, update: ItemUpdateInput!): Item!
  upsertLocation(where: LocationWhereUniqueInput!, create: LocationCreateInput!, update: LocationUpdateInput!): Location!
  upsertPhoto(where: PhotoWhereUniqueInput!, create: PhotoCreateInput!, update: PhotoUpdateInput!): Photo!
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  updateManyItems(data: ItemUpdateManyMutationInput!, where: ItemWhereInput): BatchPayload!
  updateManyLocations(data: LocationUpdateManyMutationInput!, where: LocationWhereInput): BatchPayload!
  updateManyPhotos(data: PhotoUpdateManyMutationInput!, where: PhotoWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyItems(where: ItemWhereInput): BatchPayload!
  deleteManyLocations(where: LocationWhereInput): BatchPayload!
  deleteManyPhotos(where: PhotoWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Photo implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  url: String
  caption: String
  default: Boolean!
  item: Item
  user: User
}

"""A connection to a list of items."""
type PhotoConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PhotoEdge]!
  aggregate: AggregatePhoto!
}

input PhotoCreateInput {
  url: String
  caption: String
  default: Boolean
  item: ItemCreateOneWithoutPhotosInput
  user: UserCreateOneWithoutProfilePhotoInput
}

input PhotoCreateManyWithoutItemInput {
  create: [PhotoCreateWithoutItemInput!]
  connect: [PhotoWhereUniqueInput!]
}

input PhotoCreateOneWithoutUserInput {
  create: PhotoCreateWithoutUserInput
  connect: PhotoWhereUniqueInput
}

input PhotoCreateWithoutItemInput {
  url: String
  caption: String
  default: Boolean
  user: UserCreateOneWithoutProfilePhotoInput
}

input PhotoCreateWithoutUserInput {
  url: String
  caption: String
  default: Boolean
  item: ItemCreateOneWithoutPhotosInput
}

"""An edge in a connection."""
type PhotoEdge {
  """The item at the end of the edge."""
  node: Photo!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PhotoOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  url_ASC
  url_DESC
  caption_ASC
  caption_DESC
  default_ASC
  default_DESC
}

type PhotoPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  url: String
  caption: String
  default: Boolean!
}

input PhotoScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [PhotoScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [PhotoScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PhotoScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  url: String

  """All values that are not equal to given value."""
  url_not: String

  """All values that are contained in given list."""
  url_in: [String!]

  """All values that are not contained in given list."""
  url_not_in: [String!]

  """All values less than the given value."""
  url_lt: String

  """All values less than or equal the given value."""
  url_lte: String

  """All values greater than the given value."""
  url_gt: String

  """All values greater than or equal the given value."""
  url_gte: String

  """All values containing the given string."""
  url_contains: String

  """All values not containing the given string."""
  url_not_contains: String

  """All values starting with the given string."""
  url_starts_with: String

  """All values not starting with the given string."""
  url_not_starts_with: String

  """All values ending with the given string."""
  url_ends_with: String

  """All values not ending with the given string."""
  url_not_ends_with: String
  caption: String

  """All values that are not equal to given value."""
  caption_not: String

  """All values that are contained in given list."""
  caption_in: [String!]

  """All values that are not contained in given list."""
  caption_not_in: [String!]

  """All values less than the given value."""
  caption_lt: String

  """All values less than or equal the given value."""
  caption_lte: String

  """All values greater than the given value."""
  caption_gt: String

  """All values greater than or equal the given value."""
  caption_gte: String

  """All values containing the given string."""
  caption_contains: String

  """All values not containing the given string."""
  caption_not_contains: String

  """All values starting with the given string."""
  caption_starts_with: String

  """All values not starting with the given string."""
  caption_not_starts_with: String

  """All values ending with the given string."""
  caption_ends_with: String

  """All values not ending with the given string."""
  caption_not_ends_with: String
  default: Boolean

  """All values that are not equal to given value."""
  default_not: Boolean
}

type PhotoSubscriptionPayload {
  mutation: MutationType!
  node: Photo
  updatedFields: [String!]
  previousValues: PhotoPreviousValues
}

input PhotoSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PhotoSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PhotoSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PhotoSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PhotoWhereInput
}

input PhotoUpdateInput {
  url: String
  caption: String
  default: Boolean
  item: ItemUpdateOneWithoutPhotosInput
  user: UserUpdateOneWithoutProfilePhotoInput
}

input PhotoUpdateManyDataInput {
  url: String
  caption: String
  default: Boolean
}

input PhotoUpdateManyMutationInput {
  url: String
  caption: String
  default: Boolean
}

input PhotoUpdateManyWithoutItemInput {
  create: [PhotoCreateWithoutItemInput!]
  connect: [PhotoWhereUniqueInput!]
  set: [PhotoWhereUniqueInput!]
  disconnect: [PhotoWhereUniqueInput!]
  delete: [PhotoWhereUniqueInput!]
  update: [PhotoUpdateWithWhereUniqueWithoutItemInput!]
  updateMany: [PhotoUpdateManyWithWhereNestedInput!]
  deleteMany: [PhotoScalarWhereInput!]
  upsert: [PhotoUpsertWithWhereUniqueWithoutItemInput!]
}

input PhotoUpdateManyWithWhereNestedInput {
  where: PhotoScalarWhereInput!
  data: PhotoUpdateManyDataInput!
}

input PhotoUpdateOneWithoutUserInput {
  create: PhotoCreateWithoutUserInput
  connect: PhotoWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: PhotoUpdateWithoutUserDataInput
  upsert: PhotoUpsertWithoutUserInput
}

input PhotoUpdateWithoutItemDataInput {
  url: String
  caption: String
  default: Boolean
  user: UserUpdateOneWithoutProfilePhotoInput
}

input PhotoUpdateWithoutUserDataInput {
  url: String
  caption: String
  default: Boolean
  item: ItemUpdateOneWithoutPhotosInput
}

input PhotoUpdateWithWhereUniqueWithoutItemInput {
  where: PhotoWhereUniqueInput!
  data: PhotoUpdateWithoutItemDataInput!
}

input PhotoUpsertWithoutUserInput {
  update: PhotoUpdateWithoutUserDataInput!
  create: PhotoCreateWithoutUserInput!
}

input PhotoUpsertWithWhereUniqueWithoutItemInput {
  where: PhotoWhereUniqueInput!
  update: PhotoUpdateWithoutItemDataInput!
  create: PhotoCreateWithoutItemInput!
}

input PhotoWhereInput {
  """Logical AND on all given filters."""
  AND: [PhotoWhereInput!]

  """Logical OR on all given filters."""
  OR: [PhotoWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PhotoWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  url: String

  """All values that are not equal to given value."""
  url_not: String

  """All values that are contained in given list."""
  url_in: [String!]

  """All values that are not contained in given list."""
  url_not_in: [String!]

  """All values less than the given value."""
  url_lt: String

  """All values less than or equal the given value."""
  url_lte: String

  """All values greater than the given value."""
  url_gt: String

  """All values greater than or equal the given value."""
  url_gte: String

  """All values containing the given string."""
  url_contains: String

  """All values not containing the given string."""
  url_not_contains: String

  """All values starting with the given string."""
  url_starts_with: String

  """All values not starting with the given string."""
  url_not_starts_with: String

  """All values ending with the given string."""
  url_ends_with: String

  """All values not ending with the given string."""
  url_not_ends_with: String
  caption: String

  """All values that are not equal to given value."""
  caption_not: String

  """All values that are contained in given list."""
  caption_in: [String!]

  """All values that are not contained in given list."""
  caption_not_in: [String!]

  """All values less than the given value."""
  caption_lt: String

  """All values less than or equal the given value."""
  caption_lte: String

  """All values greater than the given value."""
  caption_gt: String

  """All values greater than or equal the given value."""
  caption_gte: String

  """All values containing the given string."""
  caption_contains: String

  """All values not containing the given string."""
  caption_not_contains: String

  """All values starting with the given string."""
  caption_starts_with: String

  """All values not starting with the given string."""
  caption_not_starts_with: String

  """All values ending with the given string."""
  caption_ends_with: String

  """All values not ending with the given string."""
  caption_not_ends_with: String
  default: Boolean

  """All values that are not equal to given value."""
  default_not: Boolean
  item: ItemWhereInput
  user: UserWhereInput
}

input PhotoWhereUniqueInput {
  id: ID
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  items(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Item]!
  locations(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Location]!
  photos(where: PhotoWhereInput, orderBy: PhotoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Photo]!
  user(where: UserWhereUniqueInput!): User
  item(where: ItemWhereUniqueInput!): Item
  location(where: LocationWhereUniqueInput!): Location
  photo(where: PhotoWhereUniqueInput!): Photo
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  itemsConnection(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ItemConnection!
  locationsConnection(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LocationConnection!
  photosConnection(where: PhotoWhereInput, orderBy: PhotoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PhotoConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

enum State {
  AL
  AK
  AS
  AZ
  AR
  CA
  CO
  CT
  DE
  DC
  FM
  FL
  GA
  GU
  HI
  ID
  IL
  IN
  IA
  KS
  KY
  LA
  ME
  MH
  MD
  MA
  MI
  MN
  MS
  MO
  MT
  NE
  NV
  NH
  NJ
  NM
  NY
  NC
  ND
  MP
  OH
  OK
  OR
  PW
  PA
  PR
  RI
  SC
  SD
  TN
  TX
  UT
  VT
  VI
  VA
  WA
  WV
  WI
  WY
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  item(where: ItemSubscriptionWhereInput): ItemSubscriptionPayload
  location(where: LocationSubscriptionWhereInput): LocationSubscriptionPayload
  photo(where: PhotoSubscriptionWhereInput): PhotoSubscriptionPayload
}

type User implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  email: String!
  password: String!
  name: String!
  items(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Item!]
  profilePhoto: Photo
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
  name: String!
  items: ItemCreateManyWithoutUserInput
  profilePhoto: PhotoCreateOneWithoutUserInput
}

input UserCreateOneWithoutItemsInput {
  create: UserCreateWithoutItemsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutProfilePhotoInput {
  create: UserCreateWithoutProfilePhotoInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutItemsInput {
  email: String!
  password: String!
  name: String!
  profilePhoto: PhotoCreateOneWithoutUserInput
}

input UserCreateWithoutProfilePhotoInput {
  email: String!
  password: String!
  name: String!
  items: ItemCreateManyWithoutUserInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  name_ASC
  name_DESC
}

type UserPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  email: String!
  password: String!
  name: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  email: String
  password: String
  name: String
  items: ItemUpdateManyWithoutUserInput
  profilePhoto: PhotoUpdateOneWithoutUserInput
}

input UserUpdateManyMutationInput {
  email: String
  password: String
  name: String
}

input UserUpdateOneWithoutItemsInput {
  create: UserCreateWithoutItemsInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutItemsDataInput
  upsert: UserUpsertWithoutItemsInput
}

input UserUpdateOneWithoutProfilePhotoInput {
  create: UserCreateWithoutProfilePhotoInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutProfilePhotoDataInput
  upsert: UserUpsertWithoutProfilePhotoInput
}

input UserUpdateWithoutItemsDataInput {
  email: String
  password: String
  name: String
  profilePhoto: PhotoUpdateOneWithoutUserInput
}

input UserUpdateWithoutProfilePhotoDataInput {
  email: String
  password: String
  name: String
  items: ItemUpdateManyWithoutUserInput
}

input UserUpsertWithoutItemsInput {
  update: UserUpdateWithoutItemsDataInput!
  create: UserCreateWithoutItemsInput!
}

input UserUpsertWithoutProfilePhotoInput {
  update: UserUpdateWithoutProfilePhotoDataInput!
  create: UserCreateWithoutProfilePhotoInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  items_every: ItemWhereInput
  items_some: ItemWhereInput
  items_none: ItemWhereInput
  profilePhoto: PhotoWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type State =   'AL' |
  'AK' |
  'AS' |
  'AZ' |
  'AR' |
  'CA' |
  'CO' |
  'CT' |
  'DE' |
  'DC' |
  'FM' |
  'FL' |
  'GA' |
  'GU' |
  'HI' |
  'ID' |
  'IL' |
  'IN' |
  'IA' |
  'KS' |
  'KY' |
  'LA' |
  'ME' |
  'MH' |
  'MD' |
  'MA' |
  'MI' |
  'MN' |
  'MS' |
  'MO' |
  'MT' |
  'NE' |
  'NV' |
  'NH' |
  'NJ' |
  'NM' |
  'NY' |
  'NC' |
  'ND' |
  'MP' |
  'OH' |
  'OK' |
  'OR' |
  'PW' |
  'PA' |
  'PR' |
  'RI' |
  'SC' |
  'SD' |
  'TN' |
  'TX' |
  'UT' |
  'VT' |
  'VI' |
  'VA' |
  'WA' |
  'WV' |
  'WI' |
  'WY'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'email_ASC' |
  'email_DESC' |
  'password_ASC' |
  'password_DESC' |
  'name_ASC' |
  'name_DESC'

export type ItemOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'category_ASC' |
  'category_DESC' |
  'price_ASC' |
  'price_DESC' |
  'listed_ASC' |
  'listed_DESC'

export type Category =   'BOOKS' |
  'CLOTHES' |
  'HOUSEHOLD' |
  'OTHER'

export type PhotoOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'url_ASC' |
  'url_DESC' |
  'caption_ASC' |
  'caption_DESC' |
  'default_ASC' |
  'default_DESC'

export type LocationOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'lat_ASC' |
  'lat_DESC' |
  'long_ASC' |
  'long_DESC' |
  'street_ASC' |
  'street_DESC' |
  'city_ASC' |
  'city_DESC' |
  'state_ASC' |
  'state_DESC' |
  'zip_ASC' |
  'zip_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export interface ItemCreateWithoutLocationInput {
  category?: Category
  price?: Float
  listed?: Boolean
  photos?: PhotoCreateManyWithoutItemInput
  user?: UserCreateOneWithoutItemsInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  items_every?: ItemWhereInput
  items_some?: ItemWhereInput
  items_none?: ItemWhereInput
  profilePhoto?: PhotoWhereInput
}

export interface ItemUpdateWithoutUserDataInput {
  category?: Category
  price?: Float
  listed?: Boolean
  location?: LocationUpdateOneWithoutItemInput
  photos?: PhotoUpdateManyWithoutItemInput
}

export interface LocationWhereInput {
  AND?: LocationWhereInput[] | LocationWhereInput
  OR?: LocationWhereInput[] | LocationWhereInput
  NOT?: LocationWhereInput[] | LocationWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  lat?: Float
  lat_not?: Float
  lat_in?: Float[] | Float
  lat_not_in?: Float[] | Float
  lat_lt?: Float
  lat_lte?: Float
  lat_gt?: Float
  lat_gte?: Float
  long?: Float
  long_not?: Float
  long_in?: Float[] | Float
  long_not_in?: Float[] | Float
  long_lt?: Float
  long_lte?: Float
  long_gt?: Float
  long_gte?: Float
  street?: String
  street_not?: String
  street_in?: String[] | String
  street_not_in?: String[] | String
  street_lt?: String
  street_lte?: String
  street_gt?: String
  street_gte?: String
  street_contains?: String
  street_not_contains?: String
  street_starts_with?: String
  street_not_starts_with?: String
  street_ends_with?: String
  street_not_ends_with?: String
  city?: String
  city_not?: String
  city_in?: String[] | String
  city_not_in?: String[] | String
  city_lt?: String
  city_lte?: String
  city_gt?: String
  city_gte?: String
  city_contains?: String
  city_not_contains?: String
  city_starts_with?: String
  city_not_starts_with?: String
  city_ends_with?: String
  city_not_ends_with?: String
  state?: State
  state_not?: State
  state_in?: State[] | State
  state_not_in?: State[] | State
  zip?: Int
  zip_not?: Int
  zip_in?: Int[] | Int
  zip_not_in?: Int[] | Int
  zip_lt?: Int
  zip_lte?: Int
  zip_gt?: Int
  zip_gte?: Int
  item?: ItemWhereInput
}

export interface LocationUpdateOneWithoutItemInput {
  create?: LocationCreateWithoutItemInput
  connect?: LocationWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: LocationUpdateWithoutItemDataInput
  upsert?: LocationUpsertWithoutItemInput
}

export interface PhotoWhereInput {
  AND?: PhotoWhereInput[] | PhotoWhereInput
  OR?: PhotoWhereInput[] | PhotoWhereInput
  NOT?: PhotoWhereInput[] | PhotoWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  url?: String
  url_not?: String
  url_in?: String[] | String
  url_not_in?: String[] | String
  url_lt?: String
  url_lte?: String
  url_gt?: String
  url_gte?: String
  url_contains?: String
  url_not_contains?: String
  url_starts_with?: String
  url_not_starts_with?: String
  url_ends_with?: String
  url_not_ends_with?: String
  caption?: String
  caption_not?: String
  caption_in?: String[] | String
  caption_not_in?: String[] | String
  caption_lt?: String
  caption_lte?: String
  caption_gt?: String
  caption_gte?: String
  caption_contains?: String
  caption_not_contains?: String
  caption_starts_with?: String
  caption_not_starts_with?: String
  caption_ends_with?: String
  caption_not_ends_with?: String
  default?: Boolean
  default_not?: Boolean
  item?: ItemWhereInput
  user?: UserWhereInput
}

export interface PhotoCreateOneWithoutUserInput {
  create?: PhotoCreateWithoutUserInput
  connect?: PhotoWhereUniqueInput
}

export interface PhotoUpdateWithoutUserDataInput {
  url?: String
  caption?: String
  default?: Boolean
  item?: ItemUpdateOneWithoutPhotosInput
}

export interface PhotoCreateWithoutUserInput {
  url?: String
  caption?: String
  default?: Boolean
  item?: ItemCreateOneWithoutPhotosInput
}

export interface LocationUpdateWithoutItemDataInput {
  lat?: Float
  long?: Float
  street?: String
  city?: String
  state?: State
  zip?: Int
}

export interface ItemCreateOneWithoutPhotosInput {
  create?: ItemCreateWithoutPhotosInput
  connect?: ItemWhereUniqueInput
}

export interface LocationSubscriptionWhereInput {
  AND?: LocationSubscriptionWhereInput[] | LocationSubscriptionWhereInput
  OR?: LocationSubscriptionWhereInput[] | LocationSubscriptionWhereInput
  NOT?: LocationSubscriptionWhereInput[] | LocationSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: LocationWhereInput
}

export interface ItemCreateWithoutPhotosInput {
  category?: Category
  price?: Float
  listed?: Boolean
  location?: LocationCreateOneWithoutItemInput
  user?: UserCreateOneWithoutItemsInput
}

export interface ItemWhereInput {
  AND?: ItemWhereInput[] | ItemWhereInput
  OR?: ItemWhereInput[] | ItemWhereInput
  NOT?: ItemWhereInput[] | ItemWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  category?: Category
  category_not?: Category
  category_in?: Category[] | Category
  category_not_in?: Category[] | Category
  price?: Float
  price_not?: Float
  price_in?: Float[] | Float
  price_not_in?: Float[] | Float
  price_lt?: Float
  price_lte?: Float
  price_gt?: Float
  price_gte?: Float
  listed?: Boolean
  listed_not?: Boolean
  location?: LocationWhereInput
  photos_every?: PhotoWhereInput
  photos_some?: PhotoWhereInput
  photos_none?: PhotoWhereInput
  user?: UserWhereInput
}

export interface UserCreateOneWithoutItemsInput {
  create?: UserCreateWithoutItemsInput
  connect?: UserWhereUniqueInput
}

export interface PhotoUpdateManyMutationInput {
  url?: String
  caption?: String
  default?: Boolean
}

export interface UserCreateWithoutItemsInput {
  email: String
  password: String
  name: String
  profilePhoto?: PhotoCreateOneWithoutUserInput
}

export interface ItemWhereUniqueInput {
  id?: ID_Input
}

export interface ItemCreateInput {
  category?: Category
  price?: Float
  listed?: Boolean
  location?: LocationCreateOneWithoutItemInput
  photos?: PhotoCreateManyWithoutItemInput
  user?: UserCreateOneWithoutItemsInput
}

export interface PhotoWhereUniqueInput {
  id?: ID_Input
}

export interface LocationCreateInput {
  lat?: Float
  long?: Float
  street?: String
  city?: String
  state?: State
  zip?: Int
  item?: ItemCreateOneWithoutLocationInput
}

export interface ItemUpdateManyMutationInput {
  category?: Category
  price?: Float
  listed?: Boolean
}

export interface ItemCreateOneWithoutLocationInput {
  create?: ItemCreateWithoutLocationInput
  connect?: ItemWhereUniqueInput
}

export interface PhotoUpdateInput {
  url?: String
  caption?: String
  default?: Boolean
  item?: ItemUpdateOneWithoutPhotosInput
  user?: UserUpdateOneWithoutProfilePhotoInput
}

export interface UserUpdateOneWithoutItemsInput {
  create?: UserCreateWithoutItemsInput
  connect?: UserWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: UserUpdateWithoutItemsDataInput
  upsert?: UserUpsertWithoutItemsInput
}

export interface ItemUpdateWithoutLocationDataInput {
  category?: Category
  price?: Float
  listed?: Boolean
  photos?: PhotoUpdateManyWithoutItemInput
  user?: UserUpdateOneWithoutItemsInput
}

export interface PhotoCreateInput {
  url?: String
  caption?: String
  default?: Boolean
  item?: ItemCreateOneWithoutPhotosInput
  user?: UserCreateOneWithoutProfilePhotoInput
}

export interface LocationUpdateInput {
  lat?: Float
  long?: Float
  street?: String
  city?: String
  state?: State
  zip?: Int
  item?: ItemUpdateOneWithoutLocationInput
}

export interface UserUpdateInput {
  email?: String
  password?: String
  name?: String
  items?: ItemUpdateManyWithoutUserInput
  profilePhoto?: PhotoUpdateOneWithoutUserInput
}

export interface PhotoUpsertWithoutUserInput {
  update: PhotoUpdateWithoutUserDataInput
  create: PhotoCreateWithoutUserInput
}

export interface ItemUpdateManyWithoutUserInput {
  create?: ItemCreateWithoutUserInput[] | ItemCreateWithoutUserInput
  connect?: ItemWhereUniqueInput[] | ItemWhereUniqueInput
  set?: ItemWhereUniqueInput[] | ItemWhereUniqueInput
  disconnect?: ItemWhereUniqueInput[] | ItemWhereUniqueInput
  delete?: ItemWhereUniqueInput[] | ItemWhereUniqueInput
  update?: ItemUpdateWithWhereUniqueWithoutUserInput[] | ItemUpdateWithWhereUniqueWithoutUserInput
  updateMany?: ItemUpdateManyWithWhereNestedInput[] | ItemUpdateManyWithWhereNestedInput
  deleteMany?: ItemScalarWhereInput[] | ItemScalarWhereInput
  upsert?: ItemUpsertWithWhereUniqueWithoutUserInput[] | ItemUpsertWithWhereUniqueWithoutUserInput
}

export interface UserUpsertWithoutItemsInput {
  update: UserUpdateWithoutItemsDataInput
  create: UserCreateWithoutItemsInput
}

export interface ItemUpdateWithWhereUniqueWithoutUserInput {
  where: ItemWhereUniqueInput
  data: ItemUpdateWithoutUserDataInput
}

export interface UserCreateInput {
  email: String
  password: String
  name: String
  items?: ItemCreateManyWithoutUserInput
  profilePhoto?: PhotoCreateOneWithoutUserInput
}

export interface ItemUpdateWithoutPhotosDataInput {
  category?: Category
  price?: Float
  listed?: Boolean
  location?: LocationUpdateOneWithoutItemInput
  user?: UserUpdateOneWithoutItemsInput
}

export interface ItemCreateWithoutUserInput {
  category?: Category
  price?: Float
  listed?: Boolean
  location?: LocationCreateOneWithoutItemInput
  photos?: PhotoCreateManyWithoutItemInput
}

export interface ItemUpdateOneWithoutPhotosInput {
  create?: ItemCreateWithoutPhotosInput
  connect?: ItemWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: ItemUpdateWithoutPhotosDataInput
  upsert?: ItemUpsertWithoutPhotosInput
}

export interface LocationCreateWithoutItemInput {
  lat?: Float
  long?: Float
  street?: String
  city?: String
  state?: State
  zip?: Int
}

export interface PhotoCreateWithoutItemInput {
  url?: String
  caption?: String
  default?: Boolean
  user?: UserCreateOneWithoutProfilePhotoInput
}

export interface UserCreateWithoutProfilePhotoInput {
  email: String
  password: String
  name: String
  items?: ItemCreateManyWithoutUserInput
}

export interface LocationUpsertWithoutItemInput {
  update: LocationUpdateWithoutItemDataInput
  create: LocationCreateWithoutItemInput
}

export interface ItemSubscriptionWhereInput {
  AND?: ItemSubscriptionWhereInput[] | ItemSubscriptionWhereInput
  OR?: ItemSubscriptionWhereInput[] | ItemSubscriptionWhereInput
  NOT?: ItemSubscriptionWhereInput[] | ItemSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ItemWhereInput
}

export interface PhotoUpdateManyWithoutItemInput {
  create?: PhotoCreateWithoutItemInput[] | PhotoCreateWithoutItemInput
  connect?: PhotoWhereUniqueInput[] | PhotoWhereUniqueInput
  set?: PhotoWhereUniqueInput[] | PhotoWhereUniqueInput
  disconnect?: PhotoWhereUniqueInput[] | PhotoWhereUniqueInput
  delete?: PhotoWhereUniqueInput[] | PhotoWhereUniqueInput
  update?: PhotoUpdateWithWhereUniqueWithoutItemInput[] | PhotoUpdateWithWhereUniqueWithoutItemInput
  updateMany?: PhotoUpdateManyWithWhereNestedInput[] | PhotoUpdateManyWithWhereNestedInput
  deleteMany?: PhotoScalarWhereInput[] | PhotoScalarWhereInput
  upsert?: PhotoUpsertWithWhereUniqueWithoutItemInput[] | PhotoUpsertWithWhereUniqueWithoutItemInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface PhotoUpdateWithWhereUniqueWithoutItemInput {
  where: PhotoWhereUniqueInput
  data: PhotoUpdateWithoutItemDataInput
}

export interface LocationUpdateManyMutationInput {
  lat?: Float
  long?: Float
  street?: String
  city?: String
  state?: State
  zip?: Int
}

export interface PhotoUpdateWithoutItemDataInput {
  url?: String
  caption?: String
  default?: Boolean
  user?: UserUpdateOneWithoutProfilePhotoInput
}

export interface ItemUpsertWithoutLocationInput {
  update: ItemUpdateWithoutLocationDataInput
  create: ItemCreateWithoutLocationInput
}

export interface UserUpdateOneWithoutProfilePhotoInput {
  create?: UserCreateWithoutProfilePhotoInput
  connect?: UserWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: UserUpdateWithoutProfilePhotoDataInput
  upsert?: UserUpsertWithoutProfilePhotoInput
}

export interface ItemUpdateInput {
  category?: Category
  price?: Float
  listed?: Boolean
  location?: LocationUpdateOneWithoutItemInput
  photos?: PhotoUpdateManyWithoutItemInput
  user?: UserUpdateOneWithoutItemsInput
}

export interface UserUpdateWithoutProfilePhotoDataInput {
  email?: String
  password?: String
  name?: String
  items?: ItemUpdateManyWithoutUserInput
}

export interface UserUpdateWithoutItemsDataInput {
  email?: String
  password?: String
  name?: String
  profilePhoto?: PhotoUpdateOneWithoutUserInput
}

export interface UserUpsertWithoutProfilePhotoInput {
  update: UserUpdateWithoutProfilePhotoDataInput
  create: UserCreateWithoutProfilePhotoInput
}

export interface LocationCreateOneWithoutItemInput {
  create?: LocationCreateWithoutItemInput
  connect?: LocationWhereUniqueInput
}

export interface PhotoUpdateManyWithWhereNestedInput {
  where: PhotoScalarWhereInput
  data: PhotoUpdateManyDataInput
}

export interface UserCreateOneWithoutProfilePhotoInput {
  create?: UserCreateWithoutProfilePhotoInput
  connect?: UserWhereUniqueInput
}

export interface PhotoScalarWhereInput {
  AND?: PhotoScalarWhereInput[] | PhotoScalarWhereInput
  OR?: PhotoScalarWhereInput[] | PhotoScalarWhereInput
  NOT?: PhotoScalarWhereInput[] | PhotoScalarWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  url?: String
  url_not?: String
  url_in?: String[] | String
  url_not_in?: String[] | String
  url_lt?: String
  url_lte?: String
  url_gt?: String
  url_gte?: String
  url_contains?: String
  url_not_contains?: String
  url_starts_with?: String
  url_not_starts_with?: String
  url_ends_with?: String
  url_not_ends_with?: String
  caption?: String
  caption_not?: String
  caption_in?: String[] | String
  caption_not_in?: String[] | String
  caption_lt?: String
  caption_lte?: String
  caption_gt?: String
  caption_gte?: String
  caption_contains?: String
  caption_not_contains?: String
  caption_starts_with?: String
  caption_not_starts_with?: String
  caption_ends_with?: String
  caption_not_ends_with?: String
  default?: Boolean
  default_not?: Boolean
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface PhotoUpdateManyDataInput {
  url?: String
  caption?: String
  default?: Boolean
}

export interface UserUpdateManyMutationInput {
  email?: String
  password?: String
  name?: String
}

export interface PhotoUpsertWithWhereUniqueWithoutItemInput {
  where: PhotoWhereUniqueInput
  update: PhotoUpdateWithoutItemDataInput
  create: PhotoCreateWithoutItemInput
}

export interface ItemUpsertWithoutPhotosInput {
  update: ItemUpdateWithoutPhotosDataInput
  create: ItemCreateWithoutPhotosInput
}

export interface ItemUpdateManyWithWhereNestedInput {
  where: ItemScalarWhereInput
  data: ItemUpdateManyDataInput
}

export interface PhotoCreateManyWithoutItemInput {
  create?: PhotoCreateWithoutItemInput[] | PhotoCreateWithoutItemInput
  connect?: PhotoWhereUniqueInput[] | PhotoWhereUniqueInput
}

export interface PhotoUpdateOneWithoutUserInput {
  create?: PhotoCreateWithoutUserInput
  connect?: PhotoWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: PhotoUpdateWithoutUserDataInput
  upsert?: PhotoUpsertWithoutUserInput
}

export interface ItemUpsertWithWhereUniqueWithoutUserInput {
  where: ItemWhereUniqueInput
  update: ItemUpdateWithoutUserDataInput
  create: ItemCreateWithoutUserInput
}

export interface ItemUpdateManyDataInput {
  category?: Category
  price?: Float
  listed?: Boolean
}

export interface ItemScalarWhereInput {
  AND?: ItemScalarWhereInput[] | ItemScalarWhereInput
  OR?: ItemScalarWhereInput[] | ItemScalarWhereInput
  NOT?: ItemScalarWhereInput[] | ItemScalarWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  category?: Category
  category_not?: Category
  category_in?: Category[] | Category
  category_not_in?: Category[] | Category
  price?: Float
  price_not?: Float
  price_in?: Float[] | Float
  price_not_in?: Float[] | Float
  price_lt?: Float
  price_lte?: Float
  price_gt?: Float
  price_gte?: Float
  listed?: Boolean
  listed_not?: Boolean
}

export interface PhotoSubscriptionWhereInput {
  AND?: PhotoSubscriptionWhereInput[] | PhotoSubscriptionWhereInput
  OR?: PhotoSubscriptionWhereInput[] | PhotoSubscriptionWhereInput
  NOT?: PhotoSubscriptionWhereInput[] | PhotoSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PhotoWhereInput
}

export interface ItemCreateManyWithoutUserInput {
  create?: ItemCreateWithoutUserInput[] | ItemCreateWithoutUserInput
  connect?: ItemWhereUniqueInput[] | ItemWhereUniqueInput
}

export interface ItemUpdateOneWithoutLocationInput {
  create?: ItemCreateWithoutLocationInput
  connect?: ItemWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: ItemUpdateWithoutLocationDataInput
  upsert?: ItemUpsertWithoutLocationInput
}

export interface LocationWhereUniqueInput {
  id?: ID_Input
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface PhotoPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  url?: String
  caption?: String
  default: Boolean
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface User extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  email: String
  password: String
  name: String
  items?: Item[]
  profilePhoto?: Photo
}

export interface BatchPayload {
  count: Long
}

export interface ItemPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  category?: Category
  price?: Float
  listed: Boolean
}

export interface PhotoSubscriptionPayload {
  mutation: MutationType
  node?: Photo
  updatedFields?: String[]
  previousValues?: PhotoPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface LocationPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  lat?: Float
  long?: Float
  street?: String
  city?: String
  state?: State
  zip?: Int
}

/*
 * A connection to a list of items.

 */
export interface PhotoConnection {
  pageInfo: PageInfo
  edges: PhotoEdge[]
  aggregate: AggregatePhoto
}

export interface AggregatePhoto {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface LocationEdge {
  node: Location
  cursor: String
}

export interface LocationSubscriptionPayload {
  mutation: MutationType
  node?: Location
  updatedFields?: String[]
  previousValues?: LocationPreviousValues
}

export interface AggregateItem {
  count: Int
}

export interface Photo extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  url?: String
  caption?: String
  default: Boolean
  item?: Item
  user?: User
}

/*
 * A connection to a list of items.

 */
export interface ItemConnection {
  pageInfo: PageInfo
  edges: ItemEdge[]
  aggregate: AggregateItem
}

export interface Item extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  category?: Category
  price?: Float
  location?: Location
  photos?: Photo[]
  listed: Boolean
  user?: User
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface AggregateLocation {
  count: Int
}

export interface ItemSubscriptionPayload {
  mutation: MutationType
  node?: Item
  updatedFields?: String[]
  previousValues?: ItemPreviousValues
}

export interface Location extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  lat?: Float
  long?: Float
  street?: String
  city?: String
  state?: State
  zip?: Int
  item?: Item
}

export interface UserPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  email: String
  password: String
  name: String
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface LocationConnection {
  pageInfo: PageInfo
  edges: LocationEdge[]
  aggregate: AggregateLocation
}

/*
 * An edge in a connection.

 */
export interface PhotoEdge {
  node: Photo
  cursor: String
}

export interface AggregateUser {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface ItemEdge {
  node: Item
  cursor: String
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

export type DateTime = Date | string