import {
  PacientCreate,
  createPacientSchema,
  genreEnum,
} from "@/app/interfaces/pacient.interfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../input/Input";
import { Button } from "../ui/button";
export const CreatePacient = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [openCalendar, setOpenCalendar] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PacientCreate>({
    resolver: zodResolver(createPacientSchema),
    mode: "onChange",
  });
  //VALIDAR A DATA COM O COMPONENTE
  //   let footer = <p>Please pick a day.</p>;
  //   const toggleCalendar = (data: Date | undefined) => {
  //     console.log(data);
  //     setDate(data);
  //     console.log(date);

  //     setOpenCalendar(!openCalendar);
  //   };
  //   if (date) {
  //     footer = <p>You picked {format(date, "PP")}.</p>;
  //   }
  return (
    <form>
      <Input
        label="nome"
        placeholder="nome..."
        register={register("name")}
        errorMsg={errors.name && errors.name.message}
      />
      {/* <button type="button" onClick={() => setOpenCalendar(!openCalendar)}>
        Data de nascimento
      </button>
      {openCalendar && (
        <Calendar
          mode="single"
          selected={date}
          onSelect={(date) => toggleCalendar(date)}
          className="rounded-md border"
          captionLayout="dropdown"
          footer={footer}
          toYear={2023}
        />
      )} */}
      <Input
        label="data de nascimento"
        placeholder="Ex: 23/01/1998"
        register={register("data_nasc")}
        errorMsg={errors.data_nasc && errors.data_nasc.message}
      />
      <label htmlFor="genre">Gênero</label>
      <select {...register("genre")} id="genre">
        <option value="">SELECIONE</option>
        {genreEnum.map((genre) => {
          return (
            <option key={genre} value="genre">
              {genre}
            </option>
          );
        })}
      </select>
      <Input
        label="peso"
        placeholder="Ex: 75"
        register={register("weigth")}
        errorMsg={errors.weigth && errors.weigth.message}
      />
      <Input
        label="cpf"
        placeholder="000.000.000-00"
        register={register("cpf")}
        errorMsg={errors.cpf && errors.cpf.message}
      />
      <Input
        label="telefone"
        placeholder="11-99878-0953"
        register={register("phone")}
        errorMsg={errors.phone && errors.phone.message}
      />
      <Input
        label="email"
        placeholder="exemplo@email.com"
        register={register("email")}
        errorMsg={errors.email && errors.email.message}
      />
      <Button type="submit">Concluir</Button>
    </form>
  );
};
