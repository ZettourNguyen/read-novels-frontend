import Toggle from "@/components/Toggle";
import React, { useState } from "react";
import { BsCamera } from "react-icons/bs";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

// const userName = useSelector((state: RootState) => state.auth.user)


function BlackListForm() {
  return (
    <div>
      <h1 className="text-3xl">Danh sách người dùng bị chặn</h1>
      <form action="" className="h-[100vh]"></form>
    </div>
  );
}
export default BlackListForm