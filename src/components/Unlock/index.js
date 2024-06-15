// Write your code here
import {useState} from 'react'

import {Container, Paragraph, CustomButton} from './styledComponents'

const Unlock = () => {
  const [islock, setFun] = useState(true)

  const onChangelock = () => setFun(prevState => !prevState)

  return (
    <Container>
      {islock ? (
        <img
          src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
          alt="lock"
        />
      ) : (
        <img
          src="https://assets.ccbp.in/frontend/hooks/unlock-img.png "
          alt="unlock"
        />
      )}

      {islock ? (
        <Paragraph>Your Device is Locked</Paragraph>
      ) : (
        <Paragraph> Your Device is Unlocked </Paragraph>
      )}

      <CustomButton type="button" onClick={onChangelock}>
        {islock ? 'Unlock' : 'Lock'}
      </CustomButton>
    </Container>
  )
}

export default Unlock
