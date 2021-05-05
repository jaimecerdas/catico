"""empty message

Revision ID: b361cf40718c
Revises: 
Create Date: 2021-05-05 02:53:15.874861

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b361cf40718c'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('empresario',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('nombre', sa.String(length=120), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('pin', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('nombre'),
    sa.UniqueConstraint('nombre'),
    sa.UniqueConstraint('pin'),
    sa.UniqueConstraint('pin')
    )
    op.create_table('lugares',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('nombre', sa.String(length=120), nullable=False),
    sa.Column('ubicacion', sa.String(length=120), nullable=False),
    sa.Column('petFriendly', sa.Boolean(), nullable=False),
    sa.Column('accesoTransporte', sa.Boolean(), nullable=False),
    sa.Column('baños', sa.Boolean(), nullable=False),
    sa.Column('actividades', sa.String(length=120), nullable=False),
    sa.Column('electricidad', sa.Boolean(), nullable=False),
    sa.Column('familiar', sa.Boolean(), nullable=False),
    sa.Column('descripcion', sa.String(length=120), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('actividades'),
    sa.UniqueConstraint('actividades'),
    sa.UniqueConstraint('descripcion'),
    sa.UniqueConstraint('descripcion'),
    sa.UniqueConstraint('nombre'),
    sa.UniqueConstraint('nombre'),
    sa.UniqueConstraint('ubicacion'),
    sa.UniqueConstraint('ubicacion')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('nombre', sa.String(length=120), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('pin', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('nombre'),
    sa.UniqueConstraint('nombre'),
    sa.UniqueConstraint('pin'),
    sa.UniqueConstraint('pin')
    )
    op.create_table('visitas',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_email', sa.String(length=250), nullable=False),
    sa.Column('lugares_id', sa.Integer(), nullable=False),
    sa.Column('calificacion', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['lugares_id'], ['lugares.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('calificacion'),
    sa.UniqueConstraint('calificacion')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('visitas')
    op.drop_table('user')
    op.drop_table('lugares')
    op.drop_table('empresario')
    # ### end Alembic commands ###
