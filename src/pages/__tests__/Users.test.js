import { render, screen } from "@testing-library/react"

import Users from "../Users"

import useUsersFacade from "../../facades/useUsersFacade"

jest.mock("../../facades/useUsersFacade", () => jest.fn())

describe("Users component", () => {
  test("should show loading state when fetching data", () => {
    useUsersFacade.mockImplementationOnce(() => ({
      loading: true,
      users: [],
      error: "",
      fetchUsers: () => {},
    }))
    render(<Users />)
    expect(screen.getByTestId("loading")).toBeInTheDocument()
  })
  test("should show error if failed to fetch data", () => {
    useUsersFacade.mockImplementationOnce(() => ({
      loading: false,
      users: [],
      error: "Error while fetching the users",
      fetchUsers: () => {},
    }))
    render(<Users />)
    expect(screen.getByTestId("error")).toBeInTheDocument()
  })
  test("should show users list if data fetched successfully and at least one exists", () => {
    useUsersFacade.mockImplementationOnce(() => ({
      loading: false,
      users: [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Anna White" },
      ],
      error: "",
      fetchUsers: () => {},
    }))
    render(<Users />)
    expect(screen.getByTestId("users-list")).toBeInTheDocument()
  })
})
