import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import store from "./store";
type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useInitStores = () => {
  const dispatch = useAppDispatch();

  const populateDataFromCache = useCallback(async () => {
    
  }, [dispatch]);

  useEffect(() => {
    populateDataFromCache();
  }, [populateDataFromCache]);
};
