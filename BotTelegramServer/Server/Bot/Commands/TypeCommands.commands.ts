import { ButtonType } from "./ButtonType.command";
import { DocumentType } from "./DocumentType.command";
import { LocationType } from "./LocationType.command";
import { NestedCommandsListType } from "./NestedCommandsListType.command";
import { NestedCommandsButtonType } from "./NestedCommandsButtonType.command";
import { StartType } from "./StartType.command";
import { RegistrationType } from "./RegistrationType.command";
import { MailTextType } from "./MailTextType.command";
import { TextType } from "./TextType.command";
import { MailDocumentType } from "./MailDocumentType.command";
import { PollType } from "./PollType.Command";
import { HelpType } from "./HelpType.command";


export const typeCommands = [
  PollType,
  ButtonType,
  DocumentType,
  LocationType,
  StartType,
  NestedCommandsListType,
  NestedCommandsButtonType,
  RegistrationType,
  MailTextType,
  TextType,
  MailDocumentType,
  HelpType
]