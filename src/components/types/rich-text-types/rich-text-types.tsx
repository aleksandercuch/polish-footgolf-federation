import { statueProps } from "../statue-types/statue-types";

export interface richTextProps extends statueProps {
    updateState: (content: any) => void
}