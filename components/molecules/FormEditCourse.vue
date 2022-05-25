<template>
  <form class="form-edit-course">
    <BaseInput
      id="course-name"
      label="Nome do curso"
      placeholder="Digite o nome do curso"
    />
    <BaseInput
      id="teacher-name"
      label="Nome do professor"
      placeholder="Digite o nome do professor"
    />
    <label for="Dificuldade" class="selection">
      Dificuldade
      <select id="Dificuldade">
        <option value="iniciante">iniciante</option>
        <option value="iniciante">iniciante</option>
        <option value="iniciante">iniciante</option>
      </select>
    </label>
    <label for="description" class="textarea">
      Descrição
      <textarea id="description" placeholder="Descrição"></textarea>
    </label>
    <label for="required" class="textarea">
      Requisitos
      <textarea id="required" placeholder="Requisitos"></textarea>
    </label>
    <label for="file" class="input-file">
      Carregar imagem
      <input id="file" type="file" value="Carregar imagem" />
    </label>
  </form>
</template>

<style lang="scss" scoped>
.form-edit-course {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  .base-input[for='course-name'] {
    grid-area: 1 / 1 / 2 / 3;
  }
  .selection {
    display: flex;
    flex-direction: column;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    position: relative;
    color: color('light');
    font-family: 'Inter';
    gap: 0.5rem;
    select {
      height: 100%;
      border-radius: 8px;
      padding: 12px 16px;
    }
  }

  .textarea {
    display: flex;
    flex-direction: column;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    position: relative;
    color: color('light');
    font-family: 'Inter';
    gap: 1rem;
    textarea {
      border-radius: 8px;
      padding: 1rem;
      height: 350px;
    }
  }

  .input-file {
    justify-self: flex-start;
    background: color('roxo');
    color: color('light');
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 38px;
    /* identical to box height */

    text-align: center;
    letter-spacing: 0.15em;
    padding: 13px 23px;
    border-radius: 8px;
    input {
      display: none;
    }
  }
}
</style>
