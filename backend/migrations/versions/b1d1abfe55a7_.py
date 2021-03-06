"""empty message

Revision ID: b1d1abfe55a7
Revises: 
Create Date: 2021-01-04 15:53:40.495463

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b1d1abfe55a7'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('camera',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('camera_state', sa.Integer(), nullable=True),
    sa.Column('image_file_name', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('camera')
    # ### end Alembic commands ###
