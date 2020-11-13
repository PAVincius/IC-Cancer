import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Image, TextInput, View, Button, Text, useState, TouchableOpacity} from 'react-native';
import { CheckBox } from 'react-native-elements';
import TabBarIcon from '../../components/TabBarIcon';
import styles from '../../constants/Styles';
import { color } from 'react-native-reanimated';
import { ColorPropType } from 'react-native';
import Colors from '../../constants/Colors';
import { ScrollView } from 'react-native-gesture-handler';

function Terms2({navigation}){
  return(
      <View style={{flex:1,flexDirection:'column', alignItems: 'center', justifyContent:'space-between'}}>
          <View style={styles.marginBasic}>
              <ScrollView>
              <Text style={styles.titleText}>
                Termos de Usos de Aplicativo e Políticas de Privacidade
              </Text>
              <Text style={styles.titleText}>
              Por favor, leia estes termos legais de uso, antes de utilizar o aplicatrivo "NOME_DO_APLICATIVO".
              </Text>
              <Text style={styles.titleText}>
                Ao utilizar o "NOME_DO_APLICATIVO", você aceita e concorda em cumprir os termos e condições estabelecidas nos "termos legais de uso".
              </Text>
              <Text style={styles.titleText}>
                1. Respeito à Leis:
              </Text>
              <Text style={styles.textBasic}>
              1.1. O utilizador deverá acessar o "NOME_DO_APLICATIVO" apenas para finalidades lícitas.
	            1.2. O utilizador concorda em utilizar o aplicativo apenas para os devidos fins e em conformidade com o presente termo e limitações legais, bem como quaisquer políticas aplicáveis no Brasil.
	            1.3. Seu acesso é proibido em territórios onde o conteúdo seja considerado ilegal. Aqueles que optarem por acessar este site a partir de outras localidades o farão por iniciativa própria e serão responsáveis pelo cumprimento das leis locais aplicáveis. Os materiais não deverão ser usados ou exportados em descumprimento das leis brasileiras. Qualquer pendência com relação aos materiais será dirimida pelas leis brasileiras.
	            1.4. A alteração não autorizada dos conteúdos deste aplicativo é expressamente proibida.
              </Text>
              <Text style={styles.titleText}>
                2. Crianças e adolescentes:
              </Text>
              <Text style={styles.textBasic}>
                2.1. A utilização do aplicativo está indicada somente para indivíduos de 12 (doze) anos de idade ou mais, adolescentes segundo o Estatuto da Criança e Adolescente, sob observação dos pais.
              </Text>
              <Text style={styles.titleText}>
                3. Responsabilidade pelo conteúdo:
              </Text>
              <Text style={styles.textBasic}>
                3.1. O "NOME_DO_APLICATIVO" não é responsável pelo conteúdo de quaisquer informações eventualmente trocadas pelos utilizadores entre si e entre o utilizador e o aplicativo, ou que para o "NOME_DO_APLICATIVO", sejam elas licitas ou ilíticas.
                3.2. O utilizador concorda que é o único responsável pela sua própria conduta e pela veracidade das informações fornecidas enquanto utilizar o serviço e que é responsável pelas consequências que resultem do fornecimento intencional de dados incorretos.
                3.3. O utilizador concorda que ao usar o "NOME_DO_APLICATIVO" não irá publicar, enviar, distribuir ou divulgar conteúdo ou informação de caráter difamatório, obsceno ou ilícito, inclusive informações de propriedade exclusiva pertencentes a outras pessoas ou empresas, bem como marcas registradas ou informações protegidas por direitos autorais, sem a expressa autorização do detentor desses direitos. É de responsabilidade do utilizador o compartilhamento de quaisquer informações ou dados de saúde de terceiros.
                3.4. Ninguém pode agir em seu nome no uso do "NOME_DO_APLICATIVO". Você é responsável pelo conteúdo que individuos não autorizados produzirem ao usar essa aplicação utilizando, com sua permissão, seu perfil cadastrado. Essa regra não se aplica aos casos de fraude ou outros problemas de segurança da aplicação.
              </Text>
              <Text style={styles.titleText}>
                4. Acessibilidade ao conteúdo:
              </Text>
              <Text style={styles.textBasic}>
                4.1. A equipe "NOME_DO_APLICATIVO" não garante que esta aplicação esteja parcial ou completamente funcional para uso fora do território nacional.
              </Text>
              <Text style={styles.titleText}>
                5. Propriedade intelectual:
              </Text>
              <Text style={styles.textBasic}>
                5.1. A equipe do "NOME_DO_APLICATIVO" e seus colaboradores são detentores do direito de autoria dos conteúdos poroduzidos e apresentados nesta aplicação. essa premissa não se aplica às informações consideradas como de domínio público ou de utilidade pública.
                5.2. Todas as outras marcas comerciais, marcas de serviço, nomes e logotipos que aparecem nesta aplicação são de propriedade de seus respectivos proprietários.
                5.3. O aplicativo "NOME_DO_APLICATIVO" é um software open source cuja utilização por terceiros se submete aos termos da licença internacional GNU General Public License, version 3 (GPL-3.0). Os direitos de uso do conteúdo e dos relatórios gerados pela aplciação são cedidos pelos desenvolvedores, em especial aqueles que decorrem dos termos de licença Creative Commons - Atribuição-NãoComerical 4.0 internacional.
                5.4. Apenas informações divulgadas pelos serviços de saúde devem ser consideradas oficiais para divulgação pública, no que tange aos dados relacionados a esse tema.
                5.5. Os dados coletados por meio do "NOME_DO_APLICATIVO" podem sofrer influência pela sua capacidade de acesso a dispositivos móveis com especificações tecnológicas mínimas. Deste modo, as informações obtidas por meio desse aplicativo, podem necessariamente não corresponder à expressão real do padrão epidemiológico daquele período e local pois depende da conexão e precisão de antenas das operadoras de telefonia.
              </Text>
              <Text style={styles.titleText}>
                6. Leis, regulamentos, direitos e deveres:
              </Text>
              <Text style={styles.textBasic}>
              6.1. É política da equipe "NOME_DO_APLICATIVO" o respeito às normas de Proteção de Dados, o cumprimento de todas as leis e regulamentos aplicáveis, os quais podem ser modificados de tempos em tempos. No caso de qualquer disposição do presente Termos de Uso estar em conflito com qulaquer lei ou regulamento aplicável, a lei ou regulamentação aplicável substituirá a disposição contrária.
	            6.2. Este Termos de Uso e o uso do "NOME_DO_APLICATIVO" respeita a sua privacidade e estará adaptado à Lei 13.709/18 LGPD e regulamentações futuras da ANPD e serão regidos e interpretados de acordo com as leis internas do Brasil, vigentes, sem levar em conta as sua regras de conflitos de leis. Em caso de qualquer conflito entre as leis, regras e regulamentos estrangeiros e as do Brasil, as leis, regras e regulamentos do Brasil deverão prevalecer.
	            6.3. O "NOME_DO_APLICATIVO" poderá, mas não é obrigado, a monitorar, revistar e restringir o acesso a qualquer de suas áreas onde os utilizadores transmitem informações, podendo retirar do ar ou retirar o acesso a qualquer destas informações ou comunicações.
	            6.4. Se você tiver alguma dúvida em relação ao "NOME_DO_APLICATIVO", não hesite em contactar-nos pelo e-mail: contato@cgis.ufg.br.
              </Text>
              </ScrollView>
          </View>
          <View>
            <TouchableOpacity>
              <Text style={{alignSelf: 'center', marginVertical: '3%'}}>
                Ler termos de Uso do Aplicativo
              </Text>
            </TouchableOpacity>
          </View>
      </View>
  );
}
export default Terms2
