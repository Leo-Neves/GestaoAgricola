use gestaoagricola;
delete from safra;
delete from insumo;
delete from insumo_consumido;
delete from plantio;
delete from colheita;
delete from venda;
delete from produto_agricola;
delete from produto_venda;
delete from cliente;
delete from cultura;
delete from talhao;
delete from fazenda;
delete from produtor;
insert into Produtor values (111,"João Fazendeiro",00000001,"1972-10-10");
insert into Fazenda values(111, "Fazenda", "Belém",25,null,111);
insert into Talhao values (111,"Talhão 01",null,111);
insert into Cultura values(111, "Soja", "Sojus nomes");
insert into Cultura values(222, "Milho", "Milhus cientificus");
insert into Cultura values(333, "Sorgo", "Sorgos vegetalis");
insert into Cliente values(111, "Leandro");
insert into Cliente values(222, "Taciane");
insert into Cliente values(444, "Renan");
insert into produto_venda values (111,2500000);
insert into produto_venda values (222,3500000);
insert into produto_venda values (333,420000);
insert into Produto_agricola values (111,"1 tonelada de Soja",111);
insert into Produto_agricola values (222,"1,5 ton de Sorgo",222);
insert into Produto_agricola values (333,"1 Tonaleada de Milho",333);
insert into Venda values (111,"2016-07-01",111,111);
insert into Venda values (222,"2016-07-01",222,222);
insert into Venda values (333,"2016-07-01",333,444);
insert into Colheita values(111, "2019-05-10", 1000, 111);
insert into Colheita values(222, "2017-10-25", 1000, 222);
insert into Colheita values(333, "2019-04-20", 1000, 333);
insert into Plantio values (111,"2016-05-21","2017-01-01",1000,111,111,111);
insert into insumo_consumido values (111,1,25000,111);
insert into Insumo values(111, "Trator",25,25000,"Maquinário",111);
insert into Safra values (111,"2016/2017","2016-07-01","2017-06-30",111);
