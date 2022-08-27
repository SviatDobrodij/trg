import { ILocationFormData } from "src/app/shared/interfaces/locations.interface";
import { ModalActionsType } from "src/app/shared/types/modal-actions.type";

export interface IDataFromModal {
    event: ModalActionsType;
    data: ILocationFormData;
}
