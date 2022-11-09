import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";
import {useEffect} from "react";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useOnClickOutside = (refBtn: any, ref: any, handler: (e: MouseEvent) => void) => {
    useEffect(() => {
        const listener = (e: MouseEvent) => {
            if (ref.current === e.target || ref.current.contains(e.target) || refBtn.current === e.target) {
                return;
            }

            handler(e);
        }

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", () => listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", () => listener)
        }
    }, [refBtn, ref, handler])
}