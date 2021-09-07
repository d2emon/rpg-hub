<template>
  <v-container
    fill-height
    container--fluid
    grid-list-xl
  >
    <v-layout wrap>
      <v-flex
        md6
      >
        <v-container>
          <v-row>
            <v-col md="6">
              <v-text-field
                label="Команда"
              />
            </v-col>
            <v-col md="6">
              <v-text-field
                label="Кличка"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col md="12">
              <v-text-field
                label="Имя"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col md="12">
              <v-text-field
                label="Внешность"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col md="12">
              <v-text-field
                label="Происхождение"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col md="12">
              <v-text-field
                label="Прошлое"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col md="12">
              <v-text-field
                label="Страсть / Благодетель"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col md="4">
              <v-text-field
                label="Стресс"
              />
            </v-col>
            <v-col md="4">
              <v-text-field
                label="Травмы"
              />
            </v-col>
            <v-col md="4">
              <v-text-field
                label="Травма"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-card>
                <v-card-title>Повреждения</v-card-title>
                <v-container>
                  <v-row>
                    <v-col>
                      3
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      2
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      1
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-col>
            <v-col md="2">
              <v-row>
                <v-col>
                  <v-card>
                    <v-card-title>Лечение</v-card-title>
                    <v-container>
                      <v-progress-circular :value="0" />
                    </v-container>
                  </v-card>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-card>
                    <v-card-title>Защита</v-card-title>
                    <v-container>
                      <v-radio-group>
                        <v-radio label="Доспех" />
                        <v-radio label="Тяжелый" />
                        <v-radio label="Особая" />
                      </v-radio-group>
                    </v-container>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-textarea
                label="Заметки"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-card>
                <v-card-title>Опыт</v-card-title>
                <v-container>
                  <v-card-text>
                    <p>При отчаянной проверке навыка отмечай опыт в соответствующей ему
                      характеристике.</p>
                    <p>В конце встречи отметь в любой характеристике или шкале талантов за каждый
                      элемент из списка ниже 1 пункт опыта, если событие произошло хотя бы раз,
                      или 2 пункта опыта, если многократно.</p>
                  </v-card-text>
                  <ul>
                    <li>Ты пытался решить проблему знаниями или магическими силами.</li>
                    <li>Ты выражал свои убеждения, цели, происхождение или прошлое.</li>
                    <li>Ты сталкивался с проблемами из-за своей страсти или травм.</li>
                  </ul>
                </v-container>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-flex>
      <v-flex
        md4
      >
        <v-container>
          <h1>Мистик</h1>
          <v-row>
            <v-col>
              <v-card>
                <v-card-title>Таланты</v-card-title>
                <v-container>
                  <v-checkbox label="Принуждение" />
                  <v-checkbox label="Буря" />
                  <v-checkbox label="Железная воля" />
                  <v-checkbox label="Магическая защита" />
                  <v-checkbox label="Оккультист" />
                  <v-checkbox label="Призрачный разум" />
                  <v-checkbox label="Ритуал" />
                  <v-checkbox label="Странные методы" />
                  <v-checkbox label="Необычный" />
                  <v-checkbox label="Необычный" />
                  <v-checkbox label="Необычный" />
                </v-container>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col md="6">
              <v-card>
                <v-card-title>Опасные друзья и недруги</v-card-title>
                <v-container>
                  <v-row>
                    <v-col>
                      <v-checkbox label="+" />
                    </v-col>
                    <v-col>
                      <v-checkbox label="-" />
                    </v-col>
                    <v-col>
                      <v-text-field label="Имя" />
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-checkbox label="+" />
                    </v-col>
                    <v-col>
                      <v-checkbox label="-" />
                    </v-col>
                    <v-col>
                      <v-text-field label="Имя" />
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-checkbox label="+" />
                    </v-col>
                    <v-col>
                      <v-checkbox label="-" />
                    </v-col>
                    <v-col>
                      <v-text-field label="Имя" />
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-checkbox label="+" />
                    </v-col>
                    <v-col>
                      <v-checkbox label="-" />
                    </v-col>
                    <v-col>
                      <v-text-field label="Имя" />
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-checkbox label="+" />
                    </v-col>
                    <v-col>
                      <v-checkbox label="-" />
                    </v-col>
                    <v-col>
                      <v-text-field label="Имя" />
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-col>
            <v-col md="6">
              <v-card>
                <v-card-title>Предметы</v-card-title>
                <v-container>
                  <v-checkbox label="Необычный" />
                  <v-checkbox label="Необычный" />
                  <v-checkbox label="Необычный" />
                  <v-checkbox label="Необычный" />
                  <v-checkbox label="Необычный" />
                  <v-checkbox label="Необычный" />
                </v-container>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col md="4">
              <v-card>
                <v-card-title>Командная работа</v-card-title>
                <v-container></v-container>
              </v-card>
            </v-col>
            <v-col>
              <v-card>
                <v-card-title>Планирование и расклад</v-card-title>
                <v-container></v-container>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-flex>
      <v-flex
        md2
      >
        <v-card>
          1
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class CharacterSheet extends Vue {
  headers = [];

  items = [];

  tabs = null;

  list = [
    '1',
    '2',
    '3',
  ];

  complete(value: number) {
    console.log(this.tabs, value);
  }
}
</script>

<style scoped>

</style>
