import styled from 'styled-components'

export const GameContainer = styled.div`
  background-color: #223a5f;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ResultContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border: 2px solid #ffffff;
  border-radius: 10px;
  width: 65%;
  height: 170px;
  margin-top: 60px;
`
export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Option = styled.h1`
  color: #ffffff;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: bold;
`
export const ScoreContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 8px;
  background-color: #ffffff;
  width: 100px;
`
export const ScorePhrase = styled.p`
  color: #223a5f;
  font-family: 'Roboto';
  font-size: 17px;
  font-weight: bold;
`
export const ScoreNumber = styled.p`
  color: #223a5f;
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: bold;
`
export const GameViewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65%;
  height: 60vh;
`
export const GameOptionsList = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  padding-left: 0px;
  margin-left: 0px;
  flex-wrap: wrap;
  max-width: 480px;
`
export const TriggerButton = styled.button`
  color: #223a5f;
  font-size: 14px;
  font-weight: 700;
  font-family: 'Roboto';
  padding: 9px;
  margin: 8px;
  border: 1px solid #ffffff;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
`
export const PopupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const CloseButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  border-color: transparent;
`
export const PopupImage = styled.img`
  width: 90%;
  align-self: center;
`
export const PopupBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
`
export const GameResultViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 560px;
`
export const SelectOptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  max-width: 600;
`
export const GameUserOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const GameParticipantText = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Roboto';
`
export const GameParticipantChoiceImage = styled.img`
  width: 170px;
  height: 170px;
`
export const ResultText = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Roboto';
  text-align: center;
`
export const PlayAgainButton = styled.button`
  color: #223a5f;
  font-size: 14px;
  font-weight: 700;
  font-family: 'Roboto';
  padding: 9px;
  margin: 8px;
  border: 1px solid #ffffff;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  align-self: center;
`
