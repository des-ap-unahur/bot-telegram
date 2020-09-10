export const botCommandChildRelation = {
  sourceKey: "bot_child_id",
  foreignKey: "bot_command_id",
}

export const botCommandFatherRelation = {
  sourceKey: "bot_father_id",
  foreignKey: "bot_command_id",
}