export const commandTypeRelation = {
  sourceKey: "command_type_id",
  foreignKey: "command_type_id",
}

export const botNestedCommandFatherRelation = {
  sourceKey: "bot_command_id",
  foreignKey: "bot_child_id",
}

export const botNestedChildrenCommandRelation = {
  sourceKey: "bot_command_id",
  foreignKey: "bot_father_id",
}

export const userTypeRelation = {
  sourceKey: "user_type_id",
  foreignKey: "user_type_id",
}

export const botResponsesRelation = {
  sourceKey: "bot_command_id",
  foreignKey: "bot_id",
}