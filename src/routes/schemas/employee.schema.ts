import { Static, Type } from "@sinclair/typebox";

export const employeeIdSchema = Type.Object({
  id: Type.Number(),
});

export type employeeIdType = Static<typeof employeeIdSchema>;
