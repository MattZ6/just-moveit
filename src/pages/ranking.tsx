import SEO from '@components/SEO';

import { Container } from '@styles/pages/Ranking';

const Ranking: React.FC = () => {
  return (
    <Container>
      <SEO
        title="Ranking"
        description="🏆 Os melhores dos melhores... que rufem os tambores! 🥁"
      />

      <h1>Leaderboard</h1>

      <ul>
        <header>
          <span>Posição</span>
          <span>Usuário</span>
          <span>Desafios</span>
          <span>Experiência</span>
        </header>

        <li>
          <div>1</div>
          <div>
            <img src="https://github.com/mattz6.png" alt="Mat" />
            <div>
              <strong>Matheus Felipe Zanin</strong>
              <span>
                <img src="icons/level.svg" alt="Level" />
                Level 1
              </span>
            </div>
          </div>
          <div>
            <span>
              <b>127</b> completados
            </span>
          </div>
          <div>
            <span>
              <b>1600</b> xp
            </span>
          </div>
        </li>
      </ul>
    </Container>
  )
}

export default Ranking;
