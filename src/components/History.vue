<template>
<v-container>
  <v-layout text-center justify-center>
    <v-flex xs12 class="content">
      <v-icon x-large>mdi-history</v-icon>
      <h2 class="font-weight-bold display-1 mb-3" color="primary">History</h2>

      <v-timeline>
        <v-timeline-item v-for="(year, i) in years" :key="i" :color="year.color" class="year.brightness" small>
          <template v-slot:opposite>
            <span :class="`headline font-weight-bold ${year.color}--text`" v-text="year.year"></span>
          </template>
          <v-card>
            <v-card-title :class="`${year.color} ${year.brightness}`">
              <v-icon dark size="24" class="mr-4">
                mdi-magnify
              </v-icon>
              <h3 class="white--text font-weight-light">{{year.title}}</h3>
            </v-card-title>
            <v-container>
              <v-row>
                <v-col>
                  <div v-html="$sanitize(year.content)" class="history"></div>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
export default {
  data: () => ({
    years: [{
        color: 'cyan',
        brightness: 'lighten-1',
        year: '1986',
        title: '出生',
        content: `
          北海道の田舎で産声を上げる。
        `
      },
      {
        color: 'cyan',
        brightness: 'darken-1',
        year: '1993',
        title: '小学校',
        content: `
          地元の小学校に入学。<br/>
          スポーツはやっていたが、中でもバスケが好きだった。<br/>
          この頃はPCというものの存在すら知らない。<br/>
          担任が良い先生だった。
        `
      },
      {
        color: 'green',
        brightness: 'lighten-1',
        year: '1999',
        title: '中学校',
        content: `
          私立でもないのにエスカレータ式で地元の中学校に入学。<br/>
          バスケが楽しかった。<br/>
          いくら牛乳を飲んでも身長が伸びないジレンマに悩まされる。<br/>
          学校のPCで謎にタイピングの速さを友達と競うレベル。<br/>
          やはり担任が良い先生だった。
        `
      },
      {
        color: 'green',
        brightness: 'darken-1',
        year: '2002',
        title: '高校',
        content: `
          とりあえず札幌の高校に進学。<br/>
          1年生の終わりぐらいから、生活態度が乱れ始める。<br/>
          しかし、担任が良い先生で救われ、無事卒業する。
        `
      },
      {
        color: 'amber',
        brightness: 'lighten-1',
        year: '2005',
        title: '大学',
        content: `
          なぜか札幌の大学に入学。<br/>
          遊び呆ける。<br/>
          かくかくしかじかあり、2年目で中退。
        `
      },
      {
        color: 'amber',
        brightness: 'darken-1',
        year: '2007',
        title: '地元でプログラム勉強',
        content: `
          ちょうど地元でプログラミング塾が開催されたため、入塾。<br/>
          この時に初めてプログラミングというものを学ぶ。<br/>
          言語はC（その他もちょこちょことやった）
        `
      },
      {
        color: 'orange',
        brightness: 'lighten-1',
        year: '2008',
        title: '就職',
        content: `
          塾を開催していたIT企業へそのまま就職。<br/>
          1～2年目はそのまま塾の講師を担当。<br/>
          並行し、Javaで水道関連のシステム開発を行った期間もあった。
        `
      },
      {
        color: 'orange',
        brightness: 'darken-1',
        year: '2011',
        title: '山籠もり',
        content: `
          かくかくしかじかあり、会社を退職。<br/>
          約1年、山で木を切る生活を送る。
        `
      },
      {
        color: 'pink',
        brightness: 'lighten-1',
        year: '2012',
        title: '復帰',
        content: `
          かくかくしかじかあり、会社に再入社。<br/>
          ここから6年程度客先常駐で働く。<br/>
          この常駐先で色々な体験をさせてもらい、スキルアップ。<br/>
          Javaをベースにhtml,javascript,sqlなど…
        `
      },
      {
        color: 'pink',
        brightness: 'darken-1',
        year: '2019',
        title: 'そしてフリーランスへ',
        content: `
          かくかくしかじかあり、フリーランスになり現在に至る。
        `
      }
    ],
  }),
}
</script>

<style
  lang="sass"
  src="../assets/style/History.sass"
/>
