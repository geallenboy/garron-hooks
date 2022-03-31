import { useCallback, useState } from "react";
import { useParams, useLocation } from "react-router-dom";


const useRouter = (): void => {
  const params = useParams();
  const location = useLocation();

}

export default useRouter;