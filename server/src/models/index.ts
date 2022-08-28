import { Type } from '@sinclair/typebox';

export const AuthorModel = {
  id: Type.RegEx(/^c[^\s-]{8,}$/),
  name: Type.String(),
  email: Type.String(),
  username: Type.String(),
  passwordHash: Type.String(),
  avatarUrl: Type.Optional(Type.String()),
  city: Type.String(),
  instagram: Type.Optional(Type.String()),
  twitter: Type.Optional(Type.String()),
  facebook: Type.Optional(Type.String()),
  youtube: Type.Optional(Type.String()),
  linkedin: Type.Optional(Type.String()),
  websiteUrl: Type.Optional(Type.String()),
  createdAt: Type.String({ format: 'date-time' }),
  lastLogin: Type.String({ format: 'date-time' }),
};

enum SubjectCategory {
  islam,
  dunia,
}

export const SubjectModel = {
  id: Type.RegEx(/^c[^\s-]{8,}$/),
  name: Type.String(),
  category: Type.Enum(SubjectCategory),
};

enum CourseLevel {
  pemula,
  menengah,
  lanjuan,
}

export const CourseModel = {
  id: Type.RegEx(/^c[^\s-]{8,}$/),
  title: Type.String(),
  description: Type.Optional(Type.String()),
  thumbnailUrl: Type.Optional(Type.String()),
  level: Type.Optional(Type.Enum(CourseLevel)),
  published: Type.Boolean(),
  createdAt: Type.String({ format: 'date-time' }),
  updatedAt: Type.String({ format: 'date-time' }),
  publishedAt: Type.String({ format: 'date-time' }),
};
