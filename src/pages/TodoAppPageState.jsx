import React from "react";
import darkImage from "../assets/bg-desktop-dark.jpg";
import lightImage from "../assets/bg-desktop-light.jpg";
import mobileDarkImage from "../assets/bg-mobile-dark.jpg";
import mobileLightImage from "../assets/bg-mobile-light.jpg";
import lightIcon from "../assets/icon-sun.svg";
import darkIcon from "../assets/icon-moon.svg";
import useCustomHookState from "../hooks/useCustomHookState";
import { DragDropContext } from "react-beautiful-dnd";
import MobileList from "../components/MobileList";
import DesktopList from "../components/DesktopList";
import TodoList from "../components/TodoList";

const TodoAppPageState = () => {
  const [
    hideUnchecked,
    handleCompleted,
    theme,
    inputValue,
    handleTyping,
    handleSubmit,
    handleCheckboxChange,
    handleActive,
    handleAll,
    handleComplete,
    toggleTheme,
    handleRemoveTodo,
    clearComplete,
    filteredTodos,
    uncheckedCount,
    handleDrop,
  ] = useCustomHookState();

  return (
    <section className="app" data-theme={theme}>
      <img
        className="bgimg"
        src={theme === "dark" ? darkImage : lightImage}
        alt="desktop bg"
      />
      <img
        className="mobilebgimg"
        src={theme === "dark" ? mobileDarkImage : mobileLightImage}
        alt="mobile bg"
      />
      <header className="card">
        <h1 className="title">TODO</h1>
        <img
          onClick={toggleTheme}
          src={theme === "dark" ? lightIcon : darkIcon}
          alt=""
        />
      </header>
      <div className="inputs">
        <form onSubmit={handleSubmit}>
          <div className="static-checkmark">
            <input
              type="text"
              placeholder="Create a new todo.."
              value={inputValue}
              onChange={handleTyping}
            />
            <span className="checkmarks"></span>
          </div>
        </form>

        <ul>
          <DragDropContext onDragEnd={handleDrop}>
            <TodoList
              filteredTodos={filteredTodos}
              handleCheckboxChange={handleCheckboxChange}
              handleRemoveTodo={handleRemoveTodo}
            />
          </DragDropContext>
          <DesktopList
            uncheckedCount={uncheckedCount}
            hideUnchecked={hideUnchecked}
            handleCompleted={handleCompleted}
            handleAll={handleAll}
            handleActive={handleActive}
            handleComplete={handleComplete}
            clearComplete={clearComplete}
          />
        </ul>

        <ul>
          <MobileList
            hideUnchecked={hideUnchecked}
            handleCompleted={handleCompleted}
            handleAll={handleAll}
            handleActive={handleActive}
            handleComplete={handleComplete}
          />
        </ul>
      </div>
      <p className="draginfo">Drag and drop to reorder list</p>
    </section>
  );
};

export default TodoAppPageState;
