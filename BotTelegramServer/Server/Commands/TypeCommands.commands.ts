import { ButtonType } from "./ButtonType.command";
import { DocumentType } from "./DocumentType.command";
import { LocationType } from "./LocationType.command";
import { NestedCommandsListType } from "./NestedCommandsListType.command";
import { NestedCommandsButtonType } from "./NestedCommandsButtonType.command";
import { StartType } from "./StartType.command";
import { RegistrationType } from "./RegistrationType.command";
import { MailTextType } from "./MailTextType.command";
import { TextType } from "./TextType.command";

export const typeCommands = [
  ButtonType,
  DocumentType,
  LocationType,
  StartType,
  NestedCommandsListType,
  NestedCommandsButtonType,
  RegistrationType,
  MailTextType,
  TextType
]