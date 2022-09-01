create table webguia.galleries
(
    id      int auto_increment
        primary key,
    nameImg varchar(255) not null,
    imgPath varchar(255) not null,
    siteId  int          null,
    constraint galleries_ibfk_1
        foreign key (siteId) references webguia.sites (id)
            on update cascade on delete set null
);

create index siteId
    on webguia.galleries (siteId);

create table webguia.sites
(
    id           int auto_increment
        primary key,
    name         varchar(255) not null,
    description  varchar(255) not null,
    infoInterest varchar(255) not null,
    createdAt    datetime     not null,
    updatedAt    datetime     not null
);

create table webguia.users
(
    id        int auto_increment
        primary key,
    name      varchar(255) not null,
    email     varchar(255) not null,
    password  varchar(255) not null,
    role      varchar(255) not null,
    createdAt datetime     not null,
    updatedAt datetime     not null,
    constraint users_email_unique
        unique (email)
);

