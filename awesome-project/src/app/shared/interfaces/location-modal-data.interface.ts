import { ModalActionsType } from "../types/modal-actions.type";
import { ILocationData } from "./locations.interface";

export interface ILocationModalData {
    action: ModalActionsType;
    rowData: ILocationData;
}
