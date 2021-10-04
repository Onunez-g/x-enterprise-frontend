import React from "react";
import { ClientDto } from "../../entities/dto/ClientDto";

export interface FormProps {
  value: ClientDto
  setValue: (value: ClientDto) => void
  className?: string
}