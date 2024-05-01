https://isub.co.jp/graphql/graphql-apollo-server-with-prisma-mysql-mutation/


CREATE USER 'prisma_user'@'%'
  IDENTIFIED BY 'hogehoge';
 
GRANT ALL PRIVILEGES ON *.* TO 'prisma_user'@'%' WITH GRANT OPTION;

@ 後の % は localhost では動作しない