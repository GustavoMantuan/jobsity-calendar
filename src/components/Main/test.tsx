import { render, screen } from '@testing-library/react'
import { renderHook, act } from '@testing-library/react-hooks'
import {
  ADD_REMINDER,
  OPEN_MODAL,
  useReducerForContext,
  useContextProvider
} from '../../context'

import '@testing-library/jest-dom'

import Main from '.'

const renderMain = () => render(<Main />)

describe('<Main />', () => {
  it('should render the Main', () => {
    const { container } = renderMain()

    expect(
      screen.getByRole('heading', { name: /jobsity calendar/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('Should open Modal with a current Date', () => {
    const { result } = renderHook(() => useReducerForContext())
    const date = new Date().toLocaleDateString()
    act(() => {
      result.current.dispatch({
        type: OPEN_MODAL,
        payload: {
          reminderDate: date
        }
      })
    })
    expect(result.current.state.isModalOpen).toBe(true)
    expect(result.current.state.reminderDate).toBe(date)
  })
  it('Should add a reminder to state', () => {
    const { result } = renderHook(() => useReducerForContext())
    const reminderDate = new Date().toLocaleDateString()

    const reminderToAddToState = {
      reminder: 'Reminder test',
      time: '10:10',
      color: '#000000',
      reminderDate: reminderDate,
      city: 'Cascavel,Parana,Brazil'
    }

    expect(result.current.state.reminders).toEqual({})

    act(() => {
      result.current.dispatch({
        type: ADD_REMINDER,
        payload: {
          ...reminderToAddToState
        }
      })
    })

    const expectedObjectWithKey = {
      [reminderDate]: [
        {
          ...reminderToAddToState
        }
      ]
    }

    expect(result.current.state.reminders).toMatchObject(expectedObjectWithKey)
  })
  it('Should add a reminder to state', () => {
    const { result } = renderHook(() => useReducerForContext())
    const reminderDate = new Date().toLocaleDateString()

    const reminderToAddToState = {
      reminder: 'Reminder test',
      time: '10:10',
      color: '#000000',
      reminderDate: reminderDate,
      city: 'Cascavel,Parana,Brazil'
    }

    expect(result.current.state.reminders).toEqual({})

    act(() => {
      result.current.dispatch({
        type: ADD_REMINDER,
        payload: {
          ...reminderToAddToState
        }
      })
    })

    const expectedObjectWithKey = {
      [reminderDate]: [
        {
          ...reminderToAddToState
        }
      ]
    }

    expect(result.current.state.reminders).toMatchObject(expectedObjectWithKey)
  })
  test('should open modal and update global state through context actions instead of using directly dispatchers', () => {
    const date = new Date().toLocaleDateString()
    const { result } = renderHook(() =>
      useContextProvider(useReducerForContext())
    )
    act(() => {
      result.current.openModal(date)
    })
    expect(result.current.isModalOpen).toBe(true)
    expect(result.current.reminderDate).toBe(date)
  })
  it('Should add a reminder to state by calling actions inside context api', () => {
    const { result } = renderHook(() =>
      useContextProvider(useReducerForContext())
    )
    const reminderDate = new Date().toLocaleDateString()

    const reminderToAddToState = {
      reminder: 'Reminder test',
      time: '10:10',
      color: '#000000',
      reminderDate: reminderDate,
      city: 'Cascavel,Parana,Brazil'
    }

    expect(result.current.reminders).toEqual({})

    act(() => {
      result.current.addReminder({
        ...reminderToAddToState
      })
    })

    const expectedObjectWithKey = {
      [reminderDate]: [
        {
          ...reminderToAddToState
        }
      ]
    }

    expect(result.current.reminders).toMatchObject(expectedObjectWithKey)
  })
})
