import { gql } from 'apollo-boost';

const GET_USER = gql`
  query getClients($id: String){
    user (id: $id) {
      id,
      firstName,
      age,
      companyId
    }
  }
`;

export {
  GET_USER,
};
